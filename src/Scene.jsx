import { Component, lazy, Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
const Spline = lazy(() => import('@splinetool/react-spline'));
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}
export default function Scene({ color, paused, splineScene }) {
  const host = useRef(null), material = useRef(null), pause = useRef(paused);
  const [failed, setFailed] = useState(false);
  useEffect(() => { pause.current = paused; }, [paused]);
  useEffect(() => { material.current?.color.set(color); }, [color]);
  useEffect(() => {
    const el = host.current;
    if (!el || splineScene) return;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); } catch { setFailed(true); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, .1, 100); camera.position.z = 7.7;
    scene.add(new THREE.HemisphereLight(0xffffff, 0x6d2714, 2.6));
    const light = new THREE.DirectionalLight(0xffffff, 4.5); light.position.set(-3, 5, 4); scene.add(light);
    const fill = new THREE.DirectionalLight(0xffb999, 2); fill.position.set(4, -2, -3); scene.add(fill);
    const mat = new THREE.MeshPhysicalMaterial({ color, metalness: .26, roughness: .24, clearcoat: 1, clearcoatRoughness: .15 }); material.current = mat;
    const geometry = new THREE.TorusKnotGeometry(1.23, .43, 220, 40, 2, 3);
    const mesh = new THREE.Mesh(geometry, mat); mesh.rotation.set(.3, .4, -.4); scene.add(mesh);
    const target = new THREE.Vector2();
    const pointer = e => { const r = el.getBoundingClientRect(); target.set((e.clientX-r.left)/r.width-.5, (e.clientY-r.top)/r.height-.5); };
    el.addEventListener('pointermove', pointer);
    const resize = new ResizeObserver(() => { camera.aspect = el.clientWidth/el.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(el.clientWidth,el.clientHeight); }); resize.observe(el);
    let frame, last = 0, time = 0;
    function animate(t) { frame=requestAnimationFrame(animate); const dt=Math.min((t-last)/1000,.05); last=t; if(!pause.current) { time+=dt; mesh.rotation.y += dt*.15; mesh.rotation.x += (target.y*.35+.3-mesh.rotation.x)*.025; mesh.rotation.z = -.4+Math.sin(time*.35)*.12+target.x*.12; mesh.position.y=Math.sin(time*.7)*.1; } renderer.render(scene,camera); }
    frame=requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); el.removeEventListener('pointermove',pointer); geometry.dispose();mat.dispose();renderer.dispose();renderer.domElement.remove();material.current=null; };
  }, [splineScene]);
  const fallback = <div className="fallback-knot" aria-hidden="true">✳</div>;
  if(splineScene && !paused) return <div className="scene"><SceneBoundary fallback={fallback}><Suspense fallback={fallback}><Spline scene={splineScene}/></Suspense></SceneBoundary></div>;
  return <div ref={host} className="scene" role="img" aria-label="An orange sculptural knot rotating in three dimensions">{(failed || (splineScene && paused)) && fallback}</div>;
}

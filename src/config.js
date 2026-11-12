// Your hackathon-day edit point. Replace this copy with your product story.
export const site = {
  name: 'ORBIT', eyebrow: 'A playground for possibility',
  headline: ['Small spark.', 'Infinite potential.'],
  description: 'Every big idea starts somewhere. Bring yours to life with a little curiosity, a bold experiment, and a leap into the unknown.',
  // Spline → Export → Code → React: paste your own scene.splinecode URL here.
  splineScene: import.meta.env.VITE_SPLINE_SCENE_URL || '',
  features: [
    { title: 'Start with a spark.', text: 'Find the question worth asking. Turn a what-if into something people can see, touch, and believe in.', tag: '01 / DISCOVER', shape: 'spark' },
    { title: 'Make room for play.', text: 'Follow your curiosity. Connect unexpected dots. The best breakthroughs rarely follow a straight line.', tag: '02 / EXPERIMENT', shape: 'rings' },
    { title: 'Bring it to life.', text: 'Move from possibility to prototype. Put your idea into the world and see what happens next.', tag: '03 / CREATE', shape: 'steps' },
  ],
};
export const themes = {
  Orbit: { accent: '#f45125', soft: '#f8ded0', label: 'For the beautifully unexpected.', detail: 'A fresh canvas for your next big idea.' },
  Nature: { accent: '#36774b', soft: '#dfe9d8', label: 'A brighter future, by design.', detail: 'Make a little room for a greener tomorrow.' },
  Future: { accent: '#6754c9', soft: '#e5dff7', label: 'Explore the next frontier.', detail: 'Turn emerging technology into everyday possibility.' },
};

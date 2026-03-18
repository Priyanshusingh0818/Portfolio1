import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const codeSnippet = `class Priyanshu {
  constructor() {
    this.name = "Priyanshu";
    this.role = "AI/ML Developer";
    this.skills = ["Python", "React", "PyTorch"];
  }

  async buildIntelligentSystem() {
    const data = await this.gatherData();
    const model = new NeuralNetwork();
    
    model.train(data, { epochs: 100 });
    return model.deploy();
  }
}`;

export default function Terminal() {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < codeSnippet.length) {
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1117]"
        >
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="mx-auto text-xs font-mono text-gray-400">priyanshu@dev: ~/portfolio</div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 overflow-x-auto">
            <pre className="font-mono text-sm md:text-base leading-relaxed">
              <code className="text-gray-300">
                <span className="text-pink-400">class</span> <span className="text-yellow-300">Priyanshu</span> {'{\n'}
                {'  '}<span className="text-indigo-400">constructor</span>() {'{\n'}
                {'    '}<span className="text-pink-400">this</span>.name = <span className="text-green-400">"Priyanshu"</span>;\n
                {'    '}<span className="text-pink-400">this</span>.role = <span className="text-green-400">"AI/ML Developer"</span>;\n
                {'    '}<span className="text-pink-400">this</span>.skills = [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"PyTorch"</span>];\n
                {'  }\n\n'}
                {'  '}<span className="text-pink-400">async</span> <span className="text-blue-400">buildIntelligentSystem</span>() {'{\n'}
                {'    '}<span className="text-pink-400">const</span> data = <span className="text-pink-400">await</span> <span className="text-pink-400">this</span>.<span className="text-blue-400">gatherData</span>();\n
                {'    '}<span className="text-pink-400">const</span> model = <span className="text-pink-400">new</span> <span className="text-yellow-300">NeuralNetwork</span>();\n
                {'    \n'}
                {'    '}model.<span className="text-blue-400">train</span>(data, {'{'} epochs: <span className="text-purple-400">100</span> {'}'});\n
                {'    '}<span className="text-pink-400">return</span> model.<span className="text-blue-400">deploy</span>();\n
                {'  }\n'}
                {'}'}
                {isTyping && <span className="inline-block w-2 h-5 bg-white/70 ml-1 animate-pulse align-middle" />}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

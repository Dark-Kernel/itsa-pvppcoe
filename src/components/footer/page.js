
import { Terminal, Code, Cpu, Globe, Github, Instagram, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-tech-black via-tech-dark to-tech-gray border-t border-tech-blue/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-tech-blue/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-tech-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-tech-green/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Tech grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 210, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 210, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* ITSA Info Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-tech-gradient-primary rounded-lg mr-4">
                <Terminal className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold tech-text-gradient">ITSA</h3>
                <p className="text-gray-400 font-mono text-sm">v2025.1.0</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              <span className="text-tech-blue font-mono">{'//'} </span>
              Information Technology Students Association - Building the future through 
              innovation, collaboration, and cutting-edge technology solutions.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-400">
                <Globe size={16} className="mr-2 text-tech-green" />
                <span className="text-sm">Vasantdada Patil Pratisthan's College of Engineering</span>
              </div>
              <div className="flex items-center text-gray-400">
                <div className="w-4 h-4 bg-tech-blue rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">Sion, Mumbai, 400022</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#", color: "tech-blue", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/itsa_vppcoe/", color: "tech-purple", label: "Instagram" },
                { icon: Github, href: "#", color: "tech-green", label: "GitHub" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.label}
                  className="flex items-center justify-center w-10 h-10 bg-tech-dark border border-tech-blue/30 rounded-lg hover:border-tech-blue transition-all duration-300 hover:shadow-glow-blue group"
                >
                  <social.icon 
                    size={18} 
                    className="text-gray-400 group-hover:text-tech-blue transition-colors duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Code size={20} className="mr-2 text-tech-green" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Team", href: "/teams" },
                { name: "Events", href: "/events" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-tech-blue transition-colors duration-300 flex items-center group"
                  >
                    <span className="font-mono text-tech-blue mr-2">{'>'}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stats */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cpu size={20} className="mr-2 text-tech-purple" />
              Stats
            </h4>
            <div className="space-y-4">
              {[
                { label: "Active Members", value: "500+", color: "tech-blue" },
                { label: "Projects", value: "50+", color: "tech-green" },
                { label: "Events Hosted", value: "100+", color: "tech-purple" }
              ].map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                  <span className="font-mono font-bold text-tech-cyan">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-tech-blue/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Terminal size={16} className="text-tech-green mr-2" />
              <span className="font-mono text-sm text-gray-400">
                itsa@vppcoe:~$ echo "Building Tomorrow's Technology Today"
              </span>
            </div>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span className="mr-2">©</span>
              <span className="font-mono">2025 ITSA</span>
              <span className="mx-2">•</span>
              <span>All Rights Reserved</span>
              <div className="ml-4 w-2 h-2 bg-tech-green rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-tech-gradient-primary opacity-50"></div>
    </footer>
  );
}

export default Footer;

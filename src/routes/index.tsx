import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  Instagram, 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Car, 
  Accessibility, 
  Shield,
  Menu,
  X,
  Map as MapIcon,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [introVisible, setIntroVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fallback: remover a intro após 6 segundos caso o evento 'ended' não dispare
    const timer = setTimeout(() => {
      setIntroVisible(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { 
      title: "Corte", 
      image: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786287460/cortefeminino_yvtxe5.jpg",
      description: "Cortes modernos e personalizados para valorizar seu estilo único.",
      msg: "Olá! Gostaria de agendar um corte." 
    },
    { 
      title: "Escova", 
      image: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786287460/escova_mvymxb.jpg",
      description: "Finalização profissional para um cabelo impecável e com brilho.",
      msg: "Olá! Gostaria de agendar uma escova." 
    },
    { 
      title: "Coloração & Mechas", 
      image: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786287459/mechas_2_zynjml.jpg",
      description: "Técnicas avançadas para a cor perfeita e iluminação dos fios.",
      msg: "Olá! Gostaria de agendar coloração e mechas." 
    },
    { 
      title: "Progressiva", 
      image: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786462480/progressiva1_jlh0u7.jpg",
      description: "Redução de volume e alinhamento com máxima segurança e brilho.",
      msg: "Olá! Gostaria de agendar uma progressiva." 
    },
    { 
      title: "Tratamentos Capilares", 
      image: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786471418/Editedimage_1786471412242_jxszro.png",
      description: "Nutrição profunda e reconstrução para fios saudáveis e fortes.",
      msg: "Olá! Gostaria de agendar um tratamento capilar." 
    },
    { 
      title: "Manicure", 
      image: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786287459/manicure2_i1tdiw.jpg",
      description: "Cuidado completo para mãos impecáveis e unhas perfeitas.",
      msg: "Olá! Gostaria de agendar manicure." 
    },
    { 
      title: "Pedicure", 
      image: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786469189/pedicure_nshuvo.jpg",
      description: "Bem-estar e estética para seus pés com acabamento profissional.",
      msg: "Olá! Gostaria de agendar pedicure." 
    },
    { 
      title: "Produção", 
      image: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786477254/WhatsApp_Image_2026-08-03_at_16.08.47_zx6qop.jpg",
      description: "Produção de beleza completa para eventos, casamentos e ensaios — maquiagem, escova e finalização.",
      msg: "Olá! Gostaria de agendar uma produção." 
    },
    { 
      title: "Sobrancelha", 
      image: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786462570/Captura_de_tela_2026-08-11_123535_wbscop.png",
      description: "Design e cuidado para realçar a harmonia do seu olhar.",
      msg: "Olá! Gostaria de agendar uma sobrancelha." 
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);

  const testimonials = [
    {
      name: "Gabriela F. Guimarães",
      text: "Profissionais excelentes!!! Fizemos penteados e maquiagens para a formatura da minha filha, e fomos muito elogiadas. Lugar aconchegante, minha filha mais nova é hipersensível e a Gabi e a Fran foram incríveis nesse cuidado extra com ela.",
      initials: "GG"
    },
    {
      name: "Bia",
      text: "Melhor salão da região! Atendimento perfeito, as meninas arrasaram nas minhas unhas e no meu cabelo. Eu amei, indico de olhos fechados 🥰",
      initials: "B"
    },
    {
      name: "Evelyn",
      text: "O The Beauty Studio tem um atendimento excelente, fazendo nosso momento de autocuidado ser especial e diferenciado! Boa conversa, sempre tem um café e bolinho, fazendo com que a gente sempre queira voltar e ter mais uma ótima experiência.",
      initials: "E"
    },
    {
      name: "Fabiane França",
      text: "Fiz penteado e maquiagem nesse salão! Adorei o atendimento e o resultado!!!",
      initials: "FF"
    }
  ];

  useEffect(() => {
    if (isTestimonialPaused) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isTestimonialPaused, testimonials.length]);

  const waUrl = (msg: string) => `https://wa.me/5511939265215?text=${encodeURIComponent(msg)}`;

  return (
    <div className="min-h-screen w-full font-sans bg-[#FAF7F2] text-[#1A1A1A] overflow-x-hidden max-w-full">
      {/* Intro Overlay */}
      {introVisible && (
        <div 
          id="introOverlay"
          onAnimationEnd={(e) => {
            if (e.animationName === 'fadeOut') setIntroVisible(false);
          }}
          style={{ 
            position: 'fixed',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            background: '#000',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.6s ease-in-out'
          }}
        >
          <video 
            id="introVideo" 
            autoPlay 
            muted 
            playsInline 
            preload="auto"
            onEnded={() => setIntroVisible(false)}
            className="block max-w-full max-h-full pointer-events-none"
            style={{
              width: isMobile ? '92%' : '100%',
              height: isMobile ? '92%' : '100%',
              objectFit: 'contain'
            }}
          >
            <source src="https://res.cloudinary.com/emqxcgxp/video/upload/Logo_fades_in_with_shimmer_202608071301_f6fzac.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Header / Navbar Fixa */}
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-black/60 backdrop-blur-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/emqxcgxp/image/upload/v1786169532/logothebeuty_nh1erd.jpg"
              alt="The Beauty Studio"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Nav Desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            {[
              { label: "SOBRE NÓS", href: "#sobre" },
              { label: "SERVIÇOS", href: "#servicos" },
              { label: "AVALIAÇÕES", href: "#avaliacoes" },
              { label: "RESULTADOS", href: "#resultados" },
              { label: "LOCALIZAÇÃO E CONTATO", href: "#localizacao" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-xs tracking-[0.2em] font-medium hover:text-[#C9A86A] transition-all relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A86A] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href={waUrl("Olá! Gostaria de agendar um horário.")}
              className="bg-[#C9A86A] text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-widest hover:bg-[#D4B483] transition-all"
            >
              AGENDAR
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-[#C9A86A] p-2"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>
      
      {/* Mobile Menu Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8 animate-in slide-in-from-right duration-300">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-[#C9A86A]"
          >
            <X size={32} />
          </button>
          
          <img 
            src="https://res.cloudinary.com/emqxcgxp/image/upload/v1786169532/logothebeuty_nh1erd.jpg"
            alt="Logo"
            className="w-32 mb-8"
          />
          {[
            { label: "SOBRE NÓS", href: "#sobre" },
            { label: "SERVIÇOS", href: "#servicos" },
            { label: "AVALIAÇÕES", href: "#avaliacoes" },
            { label: "RESULTADOS", href: "#resultados" },
            { label: "LOCALIZAÇÃO E CONTATO", href: "#localizacao" }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#C9A86A] text-2xl font-serif tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waUrl("Olá! Gostaria de agendar um horário.")}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 bg-[#C9A86A] text-white px-8 py-3 rounded-full font-bold"
          >
            AGENDAR AGORA
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/emqxcgxp/video/upload/videothebeautystudio_spvvhh.mp4"
            poster="https://res.cloudinary.com/emqxcgxp/image/upload/v1786169532/logothebeuty_nh1erd.jpg"
          />
          <div className="absolute inset-0 bg-black/60 z-[1]" />
        </div>

        <div className="max-w-4xl w-full px-6 py-20 text-center text-white z-10 relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#C9A86A] mb-6 leading-tight">
            Um novo jeito de <br /> cuidar de você.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            The Beauty Studio Granja Viana — beleza, bem-estar e cuidado personalizado por Fran Badaroski no coração da Granja Viana.
          </p>
          
          <div className="inline-flex flex-col items-center gap-4 bg-black/40 backdrop-blur-md border border-[#C9A86A]/30 p-6 rounded-xl mb-10">
            <span className="text-[#C9A86A] font-bold tracking-[0.2em] text-xs md:text-sm">
              ATENDIMENTO COM HORA MARCADA • ESTACIONAMENTO GRATUITO
            </span>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Clock size={16} className="text-[#C9A86A]" />
              <span>Ter–Sex 10h–19h • Sáb 9h–18h</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl("Olá! Gostaria de agendar um horário.")}
              className="w-full sm:w-auto bg-[#C9A86A] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#D4B483] transition-all transform hover:scale-105 shadow-xl"
            >
              AGENDAR HORÁRIO
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#C9A86A] mb-4">Nossos Serviços</h2>
          <div className="w-20 h-[2px] bg-[#C9A86A] mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl shadow-sm border border-[#C9A86A]/10 hover:border-[#C9A86A]/40 transition-all group overflow-hidden flex flex-col">
                {service.image ? (
                  <div className="h-[220px] w-full overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <div className="h-[220px] w-full bg-[#FAF7F2] flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/emqxcgxp/image/upload/v1786169532/logothebeuty_nh1erd.jpg" 
                      alt="Placeholder"
                      className="w-24 opacity-20 grayscale"
                    />
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-serif text-[#1A1A1A] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {service.description}
                  </p>
                  <a
                    href={waUrl(service.msg)}
                    className="inline-block w-full py-3 border border-[#C9A86A] text-[#C9A86A] font-bold rounded-lg hover:bg-[#C9A86A] hover:text-white transition-all mt-auto"
                  >
                    AGENDAR
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resultados */}
      <section id="resultados" className="py-24 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#C9A86A] mb-4">Nossos Resultados</h2>
          <div className="w-20 h-[2px] bg-[#C9A86A] mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://res.cloudinary.com/emqxcgxp/image/upload/v1786462480/resultado_r9kssh.jpg",
              "https://res.cloudinary.com/emqxcgxp/image/upload/v1786466706/resultado2_ot0aw7.jpg",
              "https://res.cloudinary.com/emqxcgxp/image/upload/v1786466706/resultado3_y99jk9.jpg",
              "https://res.cloudinary.com/emqxcgxp/image/upload/v1786466706/resultado4_mr4qik.jpg"
            ].map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4] border border-[#C9A86A]/20 shadow-2xl">
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="sobre" className="bg-[#1A1A1A] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img
                src="https://res.cloudinary.com/emqxcgxp/image/upload/v1786169532/logothebeuty_nh1erd.jpg"
                alt="Logo The Beauty"
                className="w-full max-w-sm mx-auto transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#C9A86A]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#C9A86A] mb-8">Sobre o The Beauty Studio</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-10">
                Um espaço tranquilo e acolhedor na Granja Viana, criado pela Fran Badaroski para oferecer um novo jeito de cuidar de você. Atendimento personalizado, produtos de qualidade e um ambiente pensado exclusivamente para o seu bem-estar.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Clock size={20} />, label: "Hora Marcada" },
                  { icon: <Car size={20} />, label: "Estacionamento" },
                  { icon: <Accessibility size={20} />, label: "Acessibilidade" },
                  { icon: <Shield size={20} />, label: "Segurança" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 border border-[#C9A86A]/20 p-4 rounded-lg">
                    <div className="text-[#C9A86A]">{item.icon}</div>
                    <span className="text-white/70 text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="bg-[#0F0F0F] py-24 border-y border-[#C9A86A]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#C9A86A] text-3xl md:text-4xl font-serif mb-8">O que nossas clientes dizem</h2>
          
          <div className="flex flex-col items-center gap-2 mb-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-[#C9A86A] text-[#C9A86A]" />
              ))}
            </div>
            <span className="text-white text-xl font-medium">4,9 no Google</span>
          </div>

          <div 
            className="relative bg-white/5 border border-[#C9A86A]/20 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden"
            onMouseEnter={() => setIsTestimonialPaused(true)}
            onMouseLeave={() => setIsTestimonialPaused(false)}
          >
            <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
              {testimonials.map((t, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                    index === currentTestimonial ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
                  }`}
                >
                  <div className="w-16 h-16 bg-[#C9A86A] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg">
                    {t.initials}
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#C9A86A] text-[#C9A86A]" />
                    ))}
                  </div>
                  <p className="text-white text-lg md:text-xl italic leading-relaxed mb-6 max-w-2xl">
                    "{t.text}"
                  </p>
                  <span className="text-[#C9A86A] font-bold tracking-widest uppercase text-sm">{t.name}</span>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A86A] hover:scale-110 transition-transform hidden md:block"
            >
              <ChevronLeft size={40} />
            </button>
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C9A86A] hover:scale-110 transition-transform hidden md:block"
            >
              <ChevronRight size={40} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentTestimonial ? "bg-[#C9A86A] w-8" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=Av.+Joao+Paulo+Ablas+1555+Jardim+da+Gloria+Cotia+SP"
            target="_blank"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#C9A86A] transition-colors font-medium border-b border-white/20 pb-1"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-[#C9A86A] mb-16 text-center">Onde estamos</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] border border-[#C9A86A]/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3268482455985!2d-46.8288599238374!3d-23.59258907878345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0716b1103c8b%3A0xc0d2358c21e33c7c!2sAv.%20Jo%C3%A3o%20Paulo%20Ablas%2C%201555%20-%20Jardim%20da%20Gl%C3%B3ria%2C%20Cotia%20-%20SP%2C%2006711-250!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&maptype=satellite" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FAF7F2] rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-[#C9A86A]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">Endereço</h4>
                    <p className="text-[#1A1A1A]/70 leading-relaxed">
                      Av. João Paulo Ablas, 1555 – Jardim da Glória – Cotia/SP, 06711-250
                    </p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Av.+Joao+Paulo+Ablas+1555+Jardim+da+Gloria+Cotia+SP"
                      target="_blank"
                      className="text-[#C9A86A] font-bold mt-2 inline-block hover:underline"
                    >
                      Como chegar →
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FAF7F2] rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle className="text-[#C9A86A]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">Contatos</h4>
                    <div className="flex flex-col gap-2">
                      <a href="tel:+551146174080" className="text-[#1A1A1A]/70 hover:text-[#C9A86A]">
                        (11) 4617-4080
                      </a>
                      <a href="https://wa.me/5511939265215" className="text-[#1A1A1A]/70 hover:text-[#C9A86A]">
                        (11) 93926-5215 (WhatsApp)
                      </a>
                      <a href="https://www.instagram.com/thebeautystudiogranja/" target="_blank" className="flex items-center gap-2 text-[#1A1A1A]/70 hover:text-[#C9A86A]">
                        <Instagram size={18} /> @thebeautystudiogranja
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#C9A86A]/10">
                  <p className="text-[#1A1A1A]/80 font-medium italic">
                    "Atendimento exclusivamente com hora marcada para garantir sua total privacidade e conforto."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <img 
            src="https://res.cloudinary.com/emqxcgxp/image/upload/v1786169532/logothebeuty_nh1erd.jpg"
            alt="Logo"
            className="w-32 mx-auto mb-6"
          />
          <p className="text-[#C9A86A] font-serif text-xl mb-10 italic">
            "Um novo jeito de cuidar de você."
          </p>
          
          <div className="w-full h-[1px] bg-white/10 mb-10"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/50 text-sm">
            <div className="flex gap-6">
              <a href="#sobre" className="hover:text-[#C9A86A]">SOBRE</a>
              <a href="#servicos" className="hover:text-[#C9A86A]">SERVIÇOS</a>
              <a href="#localizacao" className="hover:text-[#C9A86A]">LOCALIZAÇÃO</a>
            </div>
            <p>© 2026 The Beauty Studio Granja Viana. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

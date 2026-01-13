// TAMAMEN SERVER-SIZ & FETCH-SIZ
// Tüm çeviriler burada, hiçbir external file yok

const translations = {
    de: {
        loader: "Laden",
        logo: "Tunç",
        logoSpan: "Alıcıoğlu",
        hero: {
            title: "Hallo, ich bin Tunç Alıcıoğlu!",
            subtitle: "Freiberuflicher Kreativspezialist | UI Designer | Game Dev | Music Composer"
        },
        portfolio: {
            title: "Portfolio",
            categories: [
                {
                    id: "ui-ux-deuces-cracked",
                    link: "portfolio1.html",
                    image: "images/portfolio-image1.jpg",
                    title: "UI / UX Redesign Deuces Cracked",
                    description: "Ich habe an der modernen Neugestaltung einer amerikanischen Poker-Trainingsseite mitgewirkt.",
                    button: "Details ansehen"
                },
                {
                    id: "crypto-casino-games",
                    link: "portfolio2.html",
                    image: "images/portfolio-image2.jpg",
                    title: "Krypto-Casino-Spieldesigns",
                    description: "Ich habe für ein Kryptospiel die Benutzeroberfläche, Grafiken, Sounds und Animationen erstellt.",
                    button: "Details ansehen"
                },
                {
                    id: "ui-ux-nesine-atyarisi",
                    link: "portfolio3.html",
                    image: "images/portfolio-image3.jpg",
                    title: "UI / UX Nesine.com & atyarisi.com",
                    description: "Ich habe 7 Jahre lang als Webdesigner bei Nesine.com gearbeitet. In dieser Zeit habe ich Aufgaben wie native iOS- und Android-Designs sowie Mailing durchgeführt. Die letzten 2 Jahre war ich in einer Führungsposition tätig.",
                    button: "Details ansehen"
                },
                {
                    id: "akai-mpc-one-redesign",
                    link: "portfolio10.html",
                    image: "images/portfolio-image11.jpg",
                    title: "Akai MPC UI Redesign",
                    description: "Ich habe das User Interface der MPC-Musikproduktions-Workstation neu gestaltet.",
                    button: "Details ansehen"
                },
                {
                    id: "ui-ux-sporbilet",
                    link: "portfolio4.html",
                    image: "images/portfolio-image4.jpg",
                    title: "UI / UX Design sporbilet.com",
                    description: "Ich habe UI- und UX-Studien durchgeführt und Schnittstellen für das Unternehmen entworfen, das Laufveranstaltungen anbietet.",
                    button: "Details ansehen"
                },
                {
                    id: "gumuslukteknik-fullstack",
                    link: "portfolio5.html",
                    image: "images/portfolio-image5.jpg",
                    title: "gumuslukteknik.com UI&UX Fullstack Development",
                    description: "Ich habe das komplette Full-Stack-Development für eine Elektrofirma in Bodrum übernommen – UI/UX, Coding, SEO und Backend.",
                    button: "Details ansehen"
                },
                {
                    id: "composerunion-fullstack",
                    link: "portfolio6.html",
                    image: "images/portfolio-image6.jpg",
                    title: "composerunion.com UI&UX / Fullstack Development",
                    description: "Ich habe eine Blogseite über Musikkomposition erstellt. Das Design wurde in Figma erstellt, das Backend mit Supabase gebaut. Ich arbeite weiter am Admin-Panel und an einer SEO-freundlichen Struktur.",
                    button: "Details ansehen"
                },
                {
                    id: "graphic-2d-motion",
                    link: "portfolio7.html",
                    image: "images/portfolio-image7.jpg",
                    title: "Grafikdesign & 2D Motion",
                    description: "Ich begann meine Karriere als Grafik- und Motiondesigner und habe dieses Feld nie verlassen. Ich habe in jedem Unternehmen, für das ich gearbeitet habe, in diesem Bereich gearbeitet.",
                    button: "Details ansehen"
                },
                {
                    id: "indie-game-dev",
                    link: "https://trotzdestodes.itch.io/",
                    image: "images/portfolio-image8.jpg",
                    title: "Indie Game Development",
                    description: "Im Jahr 2024 habe ich meine Unternehmenskarriere beendet und bin selbstständiger Spieleentwickler geworden. Bis jetzt habe ich drei Spiele veröffentlicht: Der Philologe, The Struggle for Bread und Chessforge.",
                    button: "Details ansehen"
                },
                {
                    id: "lottie-animation-ui-motion",
                    link: "portfolio9.html",
                    image: "images/portfolio-image10.jpg",
                    title: "Lottie Animation & UI Motion",
                    description: "Durch meine Erfahrung mit Figma und After Effects kann ich Oberflächen schnell mit Animationen verbessern.",
                    button: "Details ansehen"
                }
            ]
        },
        musicSkills: {
            title: "Musikkomponist",
            description: "Ich bin ein professioneller Musikkomponist. Ich habe eine klassische Ausbildung und ein Zertifikat vom Berklee College of Music. Ich spezialisiere mich auf epische, cineastische, klassische, nahöstliche, arabische und türkische Musik.",
            image: "images/portfolio-image9.jpg",
            buttonDetails: "Details ansehen",
            buttonPlay: "Abspielen",
            audioSrc: "soundtrack01.mp3"
        },
        about: {
            title: "About Me",
            fullText: "<p>Ich bin ein UI-Designer mit über zehn Jahren Berufserfahrung. Meine Karriere begann ich als Grafikdesigner. Durch kontinuierliche Weiterbildung habe ich meine Fähigkeiten in Video­bearbeitung, 2D-Animation, Webdesign und UI/UX erweitert und mich als UI-Designer spezialisiert. Parallel dazu habe ich mich auch im Musikbereich weiterentwickelt und arbeite seit 2020 professionell für verschiedene Musikbibliotheken. Im Jahr 2024 habe ich die Unternehmenswelt verlassen, um meine eigenen Projekte umzusetzen und als vielseitiger freiberuflicher Kreativer zu arbeiten. Jetzt möchte ich meine Erfahrung und meine Fähigkeiten in einem starken Team oder einem innovativen Projekt einbringen.</p>"
        },
        skills: [
            {"name": "iOS, Android, Responsive Web Design", "level": 100},
            {"name": "UI/UX Design (Figma, Sketch)", "level": 100},
            {"name": "Graphic Design(Illustrator, Photoshop)", "level": 95},
            {"name": "2D Motion Design (After Effects)", "level": 80},
            {"name": "UI Animation, Motion Design (Lottie)", "level": 80},
            {"name": "HTML, CSS, JavaScript)", "level": 70},
            {"name": "Logic Pro", "level": 100},
            {"name": "Unreal Engine & Unity", "level": 50},
            {"name": "Blender, Cinema 4D", "level": 20}
            
        ],
        cv: {
            title: "Lebenslauf & Timeline",
            items: [
                {
                    date: "2024 - heute",
                    role: "Freelancer — UI & UX Designer, Webentwickler, Indie Game Developer und Komponist für Spiele",
                    company: "Selbstständig, Remote",
                    description: "UI & UX Designer, Webentwickler auf Upwork, Indie Game Developer und Komponist für Spiele und Filmmusik auf Fiverr."
                },
                {
                    date: "2017 - 2024",
                    role: "UI & UX Designer — Nesine.com",
                    company: "Nesine.com / atyarisi.com, Istanbul",
                    description: "Ich habe als UI/UX-Designer für alle Plattformen und Bildschirme von nesine.com und atyarisi.com gearbeitet. Die letzten zwei Jahre war ich in einer leitenden Position tätig."
                },
                {
                    date: "2016 - 2017",
                    role: "Art Director — i.e.d.a Agentur",
                    company: "i.e.d.a Agentur, Istanbul",
                    description: "Ich habe an digitalen Marketingprojekten für große Marken wie Bayer, Volkswagen, Tadelle und Zumasol gearbeitet."
                },
                {
                    date: "2014 - 2016",
                    role: "Grafikdesigner / Video Editor — Gelecekhane",
                    company: "Gelecekhane, Istanbul",
                    description: "Ich war für die Erstellung digitaler Inhalte zuständig."
                },
                {
                    date: "Ausbildung",
                    role: "Webdesign und Programmierung (2 Jahre)",
                    company: "Anadolu Universität",
                    description: "Anadolu Universität — Webdesign und Programmierung (2 Jahre) - 2019"
                },
                {
                    date: "Ausbildung",
                    role: "Urdu Sprache und Literatur (4 Jahre)",
                    company: "Ankara Universität",
                    description: "Ankara Universität — Urdu-Sprache und Literatur (4 Jahre) - 2012"
                }
            ]
        },
        contact: {
            snippetTitle: "Lass uns arbeiten!",
            snippetText: "Ich bin für neue Projekte verfügbar – besonders im deutschen Markt.",
            cta: "Kontakt aufnehmen",
            title: "Kontakt",
            info: "Kontaktinformationen",
            form: "Nachricht senden",
            send: "Senden"
        },
        social: {
            itch: "itch.io",
            youtube: "YouTube",
            credly: "Credly Badge"
        },
        certs: {
            title: "Zertifikate & Anerkennungen",
            items: [
                { "date": "2025", "name": "Web Development with HTML5, CSS3, and JavaScript", "issuer": "IBM", "type": "image", "image": "images/credlyImage.jpg", "description": "Verified by Credly - Provider: IBM", "link": "https://www.credly.com/badges/0f384221-dffc-47a2-9345-1bb5ae51428c/public_url" },
                { "date": "2025", "name": "German KMK Document", "issuer": "Germany - University entrance qualification", "type": "image", "image": "images/kmkImage.jpg", "description": "KMK-approved university equivalency.", "link": "certificates/kmk.pdf" },
                { "date": "2025", "name": "German B1 Language", "issuer": "Goethe-Institut", "type": "image", "image": "images/telcImage.jpg", "description": "Telc German B1", "link": "certificates/b1.pdf" },
                { "date": "2025", "name": "C1 English Language", "issuer": "ismek", "type": "text" },
                { "date": "2025", "name": "Müzik Teorisi", "issuer": "Berklee Online", "type": "text" },
                { "date": "2018", "name": "iOS Programming Certificate", "issuer": "Wissen Akademie", "type": "text" },
                { "date": "2015", "name": "Graphic Design", "issuer": "CalArts Coursera", "type": "text" }
                
            ]
        }
    },
    en: {
        loader: "Loading",
        logo: "Tunç",
        logoSpan: "Alıcıoğlu",
        hero: {
            title: "Hello, I'm Tunç Alıcıoğlu!",
            subtitle: "Freelance Creative Specialist | UI Designer | Game Dev | Music Composer"
        },
        portfolio: {
            title: "Portfolio",
            categories: [
                {
                    id: "ui-ux-deuces-cracked",
                    link: "portfolio1.html",
                    image: "images/portfolio-image1.jpg",
                    title: "UI / UX Redesign Deuces Cracked",
                    description: "I took part in the modern redesign of an American poker training site.",
                    button: "View Details"
                },
                {
                    id: "crypto-casino-games",
                    link: "portfolio2.html",
                    image: "images/portfolio-image2.jpg",
                    title: "Crypto Casino Game Designs",
                    description: "I designed the user interface, graphics, sound effects, and animations for a crypto-based game.",
                    button: "View Details"
                },
                {
                    id: "ui-ux-nesine-atyarisi",
                    link: "portfolio3.html",
                    image: "images/portfolio-image3.jpg",
                    title: "UI / UX Nesine.com & atyarisi.com",
                    description: "I worked as a web designer at Nesine.com for 7 years. During this period, I performed tasks such as native iOS - Android designs and mailing. I held a managerial position for the last 2 years.",
                    button: "View Details"
                },
                {
                    id: "akai-mpc-one-redesign",
                    link: "portfolio10.html",
                    image: "images/portfolio-image11.jpg",
                    title: "Akai MPC UI Redesign",
                    description: "I redesigned the MPC music production workstation UI.",
                    button: "View Details"
                },
                {
                    id: "ui-ux-sporbilet",
                    link: "portfolio4.html",
                    image: "images/portfolio-image4.jpg",
                    title: "UI / UX Design sporbilet.com",
                    description: "I carried out UI and UX studies and designed interfaces for the company offering running events.",
                    button: "View Details"
                },
                {
                    id: "gumuslukteknik-fullstack",
                    link: "portfolio5.html",
                    image: "images/portfolio-image5.jpg",
                    title: "gumuslukteknik.com UI&UX Fullstack Development",
                    description: "I handled all full-stack development for an electrical company in Bodrum, including UI/UX, coding, SEO, and backend interactions.",
                    button: "View Details"
                },
                {
                    id: "composerunion-fullstack",
                    link: "portfolio6.html",
                    image: "images/portfolio-image6.jpg",
                    title: "composerunion.com UI&UX / Fullstack Development",
                    description: "I developed a blog platform dedicated to music composition. The design was created in Figma, and the backend built with Supabase. I continue to work on the admin panel and SEO-optimized content system.",
                    button: "View Details"
                },
                {
                    id: "graphic-2d-motion",
                    link: "portfolio7.html",
                    image: "images/portfolio-image7.jpg",
                    title: "Grafikdesign & 2D Motion",
                    description: " I started my career as a graphic designer and continued working in this field throughout every role.",
                    button: "View Details"
                },
                {
                    id: "indie-game-dev",
                    link: "https://trotzdestodes.itch.io/",
                    image: "images/portfolio-image8.jpg",
                    title: "Indie Game Development",
                    description: "In 2024, I ended my corporate career and became an independent game developer. So far, I have released three games: Der Philologe, The Struggle for Bread, and Chessforge.",
                    button: "View Details"
                },
                {
                    id: "lottie-animation-ui-motion",
                    link: "portfolio9.html",
                    image: "images/portfolio-image10.jpg",
                    title: "Lottie Animation & UI Motion",
                    description: "With my experience in Figma and After Effects, I can quickly enhance interfaces with engaging animations.",
                    button: "View Details"
                }
            ]
        },
        musicSkills: {
            title: "Music Composer",
            description: "I am a professional music composer. I am classically trained and certified by Berklee College of Music, specializing in Epic, Cinematic, Classical, Middle Eastern, Arabic, and Turkish music.",
            image: "images/portfolio-image9.jpg",
            buttonDetails: "View Details",
            buttonPlay: "Play",
            audioSrc: "soundtrack01.mp3"
        },
        about: {
            title: "About Me",
            fullText: "<p>I am a UI designer with over 10 years of professional experience. I began my career as a graphic designer and gradually expanded my skill set through continuous learning in video editing, 2D animation, web design, and UI/UX. Over time, this growth positioned me firmly as a UI Designer. Alongside my design career, I have also developed myself in music, receiving training and working with various music libraries since 2020. In 2024, I transitioned from corporate work to focus on my own projects, becoming a versatile freelance creative professional. I now aim to apply my multidisciplinary expertise within a strong team or an innovative project where I can contribute meaningful value.</p>"
        },
        skills: [
            {"name": "iOS, Android, Responsive Web Design", "level": 100},
            {"name": "UI/UX Design (Figma, Sketch)", "level": 100},
            {"name": "Graphic Design(Illustrator, Photoshop)", "level": 95},
            {"name": "2D Motion Design (After Effects)", "level": 80},
            {"name": "UI Animation, Motion Design (Lottie)", "level": 80},
            {"name": "HTML, CSS, JavaScript)", "level": 70},
            {"name": "Logic Pro", "level": 100},
            {"name": "Unreal Engine & Unity", "level": 50},
            {"name": "Blender, Cinema 4D", "level": 20}
        ],
        cv: {
            title: "CV & Timeline",
            items: [
                {
                    date: "2024 - Present",
                    role: "Freelancer — UI & UX Designer / Web Developer, Indie Game Developer, and Game & Film Music Composer",
                    company: "Self-employed, Remote",
                    description: "UI & UX Designer / Web Developer on Upwork, Indie Game Developer on itch.io, and Game & Film Music Composer on Fiverr, Contributor on Storyblocks and Pond5"
                },
                {
                    date: "2017 - 2024",
                    role: "UI & UX Designer - Nesine.com",
                    company: "Nesine.com, Istanbul",
                    description: "I worked as a UI/UX designer across all platforms and screens of nesine.com and atyarisi.com, including the last two years in a managerial role."
                },
                {
                    date: "2016 - 2017",
                    role: "Art Director — i.e.d.a Agency",
                    company: "i.e.d.a Agency, Istanbul",
                    description: "I contributed to the digital marketing projects of major brands such as Bayer, Volkswagen, Tadelle, and Zumasol."
                },
                {
                    date: "2014 - 2016",
                    role: "Graphic Designer / Video Editor — Gelecekhane",
                    company: "Gelecekhane, Istanbul",
                    description: "I was responsible for creating digital content for the company."
                },
                {
                    date: "Education",
                    role: "Web Design & Coding",
                    company: "Anadolu University",
                    description: "Anadolu University — Web Design & Coding (2 years) - 2019"
                },
                {
                    date: "Education",
                    role: "Urdu Language & Literature",
                    company: "Ankara University",
                    description: "Ankara University — Urdu Language & Literature (4 years) - 2012"
                }
            ]
        },
        contact: {
            snippetTitle: "Let's work together!",
            snippetText: "I'm available for new projects – especially in the German market.",
            cta: "Get In Touch",
            title: "Contact",
            info: "Contact Information",
            form: "Send Message",
            send: "Send"
        },
        social: {
            itch: "itch.io",
            youtube: "YouTube",
            credly: "Credly Badge"
        },
        certs: {
            title: "Certificates & Recognitions",
            items: [
                { "date": "2025", "name": "Web Development with HTML5, CSS3, and JavaScript", "issuer": "IBM", "type": "image", "image": "images/credlyImage.jpg", "description": "Verified by Credly - Provider: IBM", "link": "https://www.credly.com/badges/0f384221-dffc-47a2-9345-1bb5ae51428c/public_url" },
                { "date": "2025", "name": "German KMK Document", "issuer": "Germany - University entrance qualification", "type": "image", "image": "images/kmkImage.jpg", "description": "KMK-approved university equivalency.", "link": "certificates/kmk.pdf" },
                { "date": "2025", "name": "German B1 Language", "issuer": "Goethe-Institut", "type": "image", "image": "images/telcImage.jpg", "description": "Telc German B1", "link": "certificates/b1.pdf" },
                { "date": "2025", "name": "C1 English Language", "issuer": "ismek", "type": "text" },
                { "date": "2025", "name": "Müzik Teorisi", "issuer": "Berklee Online", "type": "text" },
                { "date": "2018", "name": "iOS Programming Certificate", "issuer": "Wissen Akademie", "type": "text" },
                { "date": "2015", "name": "Graphic Design", "issuer": "CalArts Coursera", "type": "text" }
                
            ]
        }
    },
    tr: {
        loader: "Yükleniyor",
        logo: "Tunç",
        logoSpan: "Alıcıoğlu",
        hero: {
            title: "Merhaba, ben Tunç Alıcıoğlu!",
            subtitle: "Freelancer Designer | UI Tasarımcısı | Oyun Geliştirici | Müzik Bestecisi"
        },
        portfolio: {
            title: "Portfolyo",
            categories: [
                {
                    id: "ui-ux-deuces-cracked",
                    link: "portfolio1.html",
                    image: "images/portfolio-image1.jpg",
                    title: "UI / UX Redesign Deuces Cracked",
                    description: "Amerika’lı poker eğitim sitesinin modern bir redesign çalışmasında görev aldım.",
                    button: "Detayları Gör"
                },
                {
                    id: "crypto-casino-games",
                    link: "portfolio2.html",
                    image: "images/portfolio-image2.jpg",
                    title: "Crypto Casino Oyunları Tasarımları",
                    description: "Kripto oyunu için kullanıcı arayüzü, grafikler, sesler ve animasyonlar hazırladım.",
                    button: "Detayları Gör"
                },
                {
                    id: "ui-ux-nesine-atyarisi",
                    link: "portfolio3.html",
                    image: "images/portfolio-image3.jpg",
                    title: "UI / UX Nesine.com & atyarisi.com",
                    description: "7 sene boyunca Nesine.com ve bünyesinde web designer pozisyonunda çalıştım. Bu süreçte native iOS - And tasarımları, mailing gibi görevler yaptım. Son 2 yıl yönetici pozisyonunda bulundum.",
                    button: "Detayları Gör"
                },
                {
                    id: "akai-mpc-one-redesign",
                    link: "portfolio10.html",
                    image: "images/portfolio-image11.jpg",
                    title: "Akai MPC UI Redesign",
                    description: "Akai MPC arayüzüne redesign çalışmam.",
                    button: "Detayları Gör"
                },
                {
                    id: "ui-ux-sporbilet",
                    link: "portfolio4.html",
                    image: "images/portfolio-image4.jpg",
                    title: "UI / UX Design sporbilet.com",
                    description: "Koşu etkinlikleri sunan firma için UI ve UX çalışmaları yaptım, arayüzlerini tasarladım.",
                    button: "Detayları Gör"
                },
                {
                    id: "gumuslukteknik-fullstack",
                    link: "portfolio5.html",
                    image: "images/portfolio-image5.jpg",
                    title: "gumuslukteknik.com UI&UX Fullstack Development",
                    description: "Bodrum merkezli elektrik hizmetleri firması için Full-Stack development'ın tamamunı üstlendim. UI/UX, Kodlama, SEO ve Backend etkileşimleri dahil.",
                    button: "Detayları Gör"
                },
                {
                    id: "composerunion-fullstack",
                    link: "portfolio6.html",
                    image: "images/portfolio-image6.jpg",
                    title: "composerunion.com UI&UX / Fullstack Development",
                    description: "Müzik ve müzik eğitimi üzerine bir blog platformu geliştirdim. Tasarımı Figma'da oluşturdum, backend'i Supabase ile inşa ettim. Admin paneli ve SEO dostu içerik sistemi üzerinde çalışmaya devam ediyorum.",
                    button: "Detayları Gör"
                },
                {
                    id: "graphic-2d-motion",
                    link: "portfolio7.html",
                    image: "images/portfolio-image7.jpg",
                    title: "Grafik Tasarım & 2D motion",
                    description: "Kariyerime grafik ve motion tasarımcı olarak başladım, bu alanı hiç bırakmadım. Her çalıştığım firmada bu alanda çalışmalarım oldu.",
                    button: "Detayları Gör"
                },
                {
                    id: "indie-game-dev",
                    link: "https://trotzdestodes.itch.io/",
                    image: "images/portfolio-image8.jpg",
                    title: "Indie Game Development",
                    description: "2024 yılında şirket kariyerimi sonlandırarak, serbest oyun geliştiriciliğini deneyimledim. Şu ana kadar 3 adet oyun yayınladım. Der Philologe, The Struggle for Bread ve Chessforge.",
                    button: "Detayları Gör"
                },
                {
                    id: "lottie-animation-ui-motion",
                    link: "portfolio9.html",
                    image: "images/portfolio-image10.jpg",
                    title: "Lottie Animation & UI Motion",
                    description: "Figma ve After Effects bilgim sayesinde arayüzleri hızlıca etkileyici animasyonlarla zenginleştirebiliyorum.",
                    button: "Detayları Gör"
                }
            ]
        },
        musicSkills: {
            title: "Oyun / Film Müziği Bestecisi",
            description: "Profesyonel bir müzik bestecisiyim. Klasik eğitim aldım ve Berklee College of Music tarafından sertifikalandırıldım. Uzmanlık alanlarım arasında epik, sinematik, klasik, Orta Doğu, Arap ve Türk müziği yer alıyor.",
            image: "images/portfolio-image9.jpg",
            buttonDetails: "Detayları Gör",
            buttonPlay: "Çal",
            audioSrc: "soundtrack01.mp3"
        },
        about: {
            title: "Hakkımda",
            fullText: "<p>Profesyonel olarak 10+ yıllık deneyime sahip bir arayüz tasarımcıyım. Kariyerime grafik tasarımcı olarak başladım; devam eden eğitimlerle video editörlüğü, 2D animasyon, web tasarımı ve UI/UX alanlarında uzmanlaşarak UI Designer olarak konumlandım. Tasarım yolculuğuma paralel olarak müzik alanında da kendimi sürekli geliştirdim ve 2020’den itibaren çeşitli müzik kütüphaneleri için profesyonel çalışmalar ürettim. 2024 yılında, kendi projelerimi hayata geçirmek için kurumsal iş hayatından ayrılarak freelance, çok yönlü bir yaratıcı profesyonel olarak çalışmaya başladım. Edindiğim tüm bu deneyimi, güçlü bir ekipte veya yenilikçi bir projede değer üretmek için kullanmayı hedefliyorum.</p>"
        },
        skills: [
            {"name": "iOS, Android, Responsive Web Design", "level": 100},
            {"name": "UI/UX Design (Figma, Sketch)", "level": 100},
            {"name": "Graphic Design(Illustrator, Photoshop)", "level": 95},
            {"name": "2D Motion Design (After Effects)", "level": 80},
            {"name": "UI Animation, Motion Design (Lottie)", "level": 80},
            {"name": "HTML, CSS, JavaScript)", "level": 70},
            {"name": "Logic Pro", "level": 100},
            {"name": "Unreal Engine & Unity", "level": 50},
            {"name": "Blender, Cinema 4D", "level": 20}
        ],
        cv: {
            title: "Özgeçmiş & Zaman Çizelgesi",
            items: [
                {
                    date: "2024 - Bugün",
                    role: "Freelancer - UI & UX / Web Developer, Indie Game Developer, Music Composer",
                    company: "Upwork, Fiverr, itch.io, storyblocks, pond5",
                    description: "Upwork’te UI & UX Tasarımcısı / Web Developer, Indie Game Developer ve Fiverr’da Oyun & Film Müziği Bestecisi."
                },
                {
                    date: "2017 - 2024",
                    role: "UI & UX Tasarımcısı — Nesine.com",
                    company: "Nesine.com / atyarisi.com, İstanbul",
                    description: "Nesine.com ve atyarisi.com’un tüm platform ve ekranlarında arayüz tasarımcısı olarak görev aldım. Son iki yılda yönetici pozisyonunda çalıştım."
                },
                {
                    date: "2016 - 2017",
                    role: "Art Director — i.e.d.a Ajans",
                    company: "i.e.d.a. Reklam Ajansı",
                    description: "Bayer, Volkswagen, Tadelle ve Zumasol gibi büyük markaların dijital pazarlama projelerinde görev aldım."
                },
                {
                    date: "2014 - 2016",
                    role: "Grafik Tasarımcı / Video Editörü — Gelecekhane",
                    company: "Gelecekhane",
                    description: "Firmanın dijital içerik üretim süreçlerinde aktif rol aldım."
                },
                {
                    date: "Eğitim",
                    role: "Web Tasarım ve Kodlama",
                    company: "Anadolu Üniversitesi",
                    description: "Web Tasarım ve Kodlama (2 yıl) - 2019"
                },
                {
                    date: "Eğitim",
                    role: "Urdu Dili ve Edebiyatı",
                    company: "Ankara Üniversitesi",
                    description: "Urdu Dili ve Edebiyatı (4 yıl) - 2012"
                }
            ]
        },
        contact: {
            snippetTitle: "Hadi çalışalım!",
            snippetText: "Yeni projeler için müsaitim – özellikle Alman pazarı için.",
            cta: "İletişime Geç",
            title: "İletişim",
            info: "İletişim Bilgileri",
            form: "Mesaj Göster",
            send: "Gönder"
        },
        social: {
            itch: "itch.io",
            youtube: "YouTube",
            credly: "Credly Rozeti"
        },
        certs: {
            title: "Sertifikalar & Tanınmalar",
            items: [
                { "date": "2025", "name": "Web Development with HTML5, CSS3, and JavaScript", "issuer": "IBM", "type": "image", "image": "images/credlyImage.jpg", "description": "Verified by Credly - Provider: IBM", "link": "https://www.credly.com/badges/0f384221-dffc-47a2-9345-1bb5ae51428c/public_url" },
                { "date": "2025", "name": "German KMK Document", "issuer": "Germany - University entrance qualification", "type": "image", "image": "images/kmkImage.jpg", "description": "KMK-approved university equivalency.", "link": "certificates/kmk.pdf" },
                { "date": "2025", "name": "German B1 Language", "issuer": "Goethe-Institut", "type": "image", "image": "images/telcImage.jpg", "description": "Telc German B1", "link": "certificates/b1.pdf" },
                { "date": "2025", "name": "C1 English Language", "issuer": "ismek", "type": "text" },
                { "date": "2025", "name": "Müzik Teorisi", "issuer": "Berklee Online", "type": "text" },
                { "date": "2018", "name": "iOS Programming Certificate", "issuer": "Wissen Akademie", "type": "text" },
                { "date": "2015", "name": "Graphic Design", "issuer": "CalArts Coursera", "type": "text" }
                
            ]
        }
    }
};

// DEFAULT: TÜRKÇE BAŞLASIN
let currentLang = 'tr';

// URL'den dil parametresini al
const getLangFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');
    if (lang && translations[lang.toLowerCase()]) {
        return lang.toLowerCase();
    }
    return 'tr'; // Varsayılan dil
};

// RENDER ALL
const renderAll = () => {
    renderHero();
    renderPortfolio();
    renderMusicSkills(); // New call
    renderAbout();
    renderSkills();
    renderTimeline();
    renderCerts();
};

// TEXT SCRAMBLER
class TextScrambler {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = ''; let complete = 0;
        for (let i = 0; i < this.queue.length; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) { complete++; output += to; }
            else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) char = this.chars[Math.floor(Math.random() * this.chars.length)];
                this.queue[i].char = char; output += `<span class="dud">${char}</span>`;
            } else output += from;
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) this.resolve();
        else {
            requestAnimationFrame(this.update);
            this.frame++;
        }
    }
}

// RENDER FUNCTIONS
const renderHero = () => {
    const titleEl = document.getElementById('heroTitle');
    const subtitleEl = document.getElementById('heroSubtitle');
    if (titleEl) {
        titleEl.innerText = translations[currentLang].hero.title;
        new TextScrambler(titleEl).setText(translations[currentLang].hero.title);
    }
    if (subtitleEl) subtitleEl.innerText = translations[currentLang].hero.subtitle;
};

const renderPortfolio = () => {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    grid.innerHTML = translations[currentLang].portfolio.categories.map(cat => `
        <div class="portfolio-card" id="${cat.id}" onclick="openDetail('${cat.link}')">
            <div class="card-image"><img src="${cat.image}" alt="${cat.title}"></div>
            <div class="card-content">
                <h3 class="card-title">${cat.title}</h3>
                <p class="card-description">${cat.description}</p>
                <button class="btn">${cat.button}</button>
            </div>
        </div>
    `).join('');
};

let audioPlayer = new Audio();
let isPlaying = false;

const playPauseAudio = (audioSrc, buttonElement) => {
    if (audioPlayer.paused) {
        audioPlayer.src = audioSrc;
        audioPlayer.play();
        isPlaying = true;
        buttonElement.innerText = translations[currentLang].musicSkills.buttonPlay + ' (❚❚)'; // Pause symbol
    } else {
        audioPlayer.pause();
        isPlaying = false;
        buttonElement.innerText = translations[currentLang].musicSkills.buttonPlay;
    }
    audioPlayer.onended = () => {
        isPlaying = false;
        buttonElement.innerText = translations[currentLang].musicSkills.buttonPlay;
    };
};

const renderMusicSkills = () => {
    const musicSkillsContainer = document.getElementById('musicSkillsContainer');
    if (!musicSkillsContainer) return;

    const musicData = translations[currentLang].musicSkills;
    musicSkillsContainer.innerHTML = `
        <div class="music-card">
            <div class="music-image-container">
                <img src="${musicData.image}" alt="${musicData.title}">
            </div>
            <div class="music-content">
                <h3 class="music-title">${musicData.title}</h3>
                <p class="music-description">${musicData.description}</p>
                <div class="music-buttons">
                    <button class="btn" onclick="openDetail('https://www.youtube.com/@TuncAlicioglu')">${musicData.buttonDetails}</button>
                    
                </div>
            </div>
        </div>
    `;

    const playMusicBtn = document.getElementById('playMusicBtn');
    if (playMusicBtn) {
        playMusicBtn.addEventListener('click', () => playPauseAudio(musicData.audioSrc, playMusicBtn));
    }
};


const renderAbout = () => {
    const el = document.getElementById('aboutText');
    if (el) el.innerHTML = translations[currentLang].about.fullText;
};

const renderSkills = () => {
    const el = document.getElementById('aboutSkills');
    if (!el) return;
    el.innerHTML = translations[currentLang].skills.map(skill => `
        <div class="skill-bar">
            <div class="skill-header">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="skill-progress">
                <div class="skill-fill" data-width="${skill.level}"></div>
            </div>
        </div>
    `).join('');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.width + '%';
            }
        });
    });
    document.querySelectorAll('.skill-fill').forEach(el => observer.observe(el));
};

const renderTimeline = () => {
    const el = document.querySelector('.career-timeline'); // Target the new class
    if (!el) return;
    el.innerHTML = translations[currentLang].cv.items.map(item => `
        <div class="timeline-item">
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">
                <h3>${item.role}</h3>
                <p>${item.company}</p>
                <p class="timeline-description-small">${item.description}</p>
            </div>
        </div>
    `).join('');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
    }, { threshold: 0.3 });
    document.querySelectorAll('.career-timeline .timeline-item').forEach(el => observer.observe(el));
};

const renderCerts = () => {
    const el = document.getElementById('certsGrid');
    if (!el) return;
    el.innerHTML = translations[currentLang].certs.items.map(cert => {
        if (cert.type === "image") {
            return `
                <div class="cert-card cert-image">
                    <img src="${cert.image}" alt="${cert.name}">
                    <div class="cert-content">
                        <div class="cert-date">${cert.date}</div>
                        <div class="cert-name">${cert.name}</div>
                        <div class="cert-issuer">${cert.issuer}</div>
                        <p class="cert-description">${cert.description}</p>
                        ${cert.link ? `<a href="${cert.link}" target="_blank" class="btn cert-button">View Certification</a>` : ''}
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="cert-card">
                    <div class="cert-date">${cert.date}</div>
                    <div class="cert-name">${cert.name}</div>
                    <div class="cert-issuer">${cert.issuer}</div>
                </div>
            `;
        }
    }).join('');
};

// LANGUAGE SWITCH
const switchLanguage = (lang) => {
    currentLang = lang;
    document.body.setAttribute('data-lang', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    renderAll();
};

// OPEN DETAIL
const openDetail = (link) => {
    if (link.startsWith('http://') || link.startsWith('https://')) {
        window.open(link, '_blank');
    } else {
        window.location.href = `${link}?lang=${currentLang}`;
    }
};

// PARTICLES
const createParticles = () => {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 10 + 's';
        p.style.animationDuration = (10 + Math.random() * 10) + 's';
        container.appendChild(p);
    }
};

// CURSOR
const initCursor = () => {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    if (!cursor || !follower) return;
    
    let mouseX = 0, mouseY = 0, fx = 0, fy = 0;
    
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX; mouseY = e.clientY;
    });
    
    const animate = () => {
        fx += (mouseX - fx) * 0.1;
        fy += (mouseY - fy) * 0.1;
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
        follower.style.left = fx - 20 + 'px';
        follower.style.top = fy - 20 + 'px';
        requestAnimationFrame(animate);
    };
    animate();
    
    document.querySelectorAll('button, .portfolio-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            follower.style.transform = 'scale(1.2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
        });
    });
};

// DOM READY
document.addEventListener('DOMContentLoaded', () => {
    currentLang = getLangFromUrl();
    document.body.setAttribute('data-lang', currentLang);
    document.documentElement.setAttribute('lang', currentLang); // Update html lang attribute
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === currentLang));
    
    renderAll();
    createParticles();
    initCursor();
    
    // Hide loader
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }, 1000);
    }
    
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });
    
    // Contact form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = currentLang === 'tr' ? 'Mesaj gönderildi! (Demo)' :
                        currentLang === 'de' ? 'Nachricht gesendet! (Demo)' :
                        'Message sent! (Demo)';
            alert(msg);
        });
    }
});

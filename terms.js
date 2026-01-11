const itTerms = [
    {
        id: "api",
        term: {
            en: "API",
            id: "API",
            es: "API",
            fr: "API",
            de: "API",
            ja: "API",
            zh: "API",
            ar: "واجهة برمجة التطبيقات (API)"
        },
        definition: {
            en: "Application Programming Interface. A set of rules and protocols for building and interacting with software applications.",
            id: "Antarmuka Pemrograman Aplikasi. Kumpulan aturan dan protokol untuk membangun dan berinteraksi dengan aplikasi perangkat lunak.",
            es: "Interfaz de programación de aplicaciones. Un conjunto de reglas y protocolos para crear e interactuar con aplicaciones de software.",
            fr: "Interface de programmation d'application. Un ensemble de règles et de protocoles pour créer et interagir avec des applications logicielles.",
            de: "Anwendungsprogrammierschnittstelle. Eine Reihe von Regeln und Protokollen für die Erstellung und Interaktion mit Softwareanwendungen.",
            ja: "アプリケーションプログラミングインターフェース。ソフトウェアアプリケーションの構築と相互作用のためのルールとプロトコルのセット。",
            zh: "应用程序编程接口。一组用于构建和与软件应用程序交互 st 的规则和协议。",
            ar: "واجهة برمجة التطبيقات. مجموعة من القواعد والبروتوكولات لبناء تطبيقات البرمجيات والتفاعل معها."
        },
        category: {
            en: "Software Development",
            id: "Pengembangan Perangkat Lunak",
            es: "Desarrollo de Software",
            fr: "Développement Logiciel",
            de: "Softwareentwicklung",
            ja: "ソフトウェア開発",
            zh: "软件开发",
            ar: "تطوير البرمجيات"
        }
    },
    {
        id: "backend",
        term: {
            en: "Backend",
            id: "Backend",
            es: "Backend",
            fr: "Backend",
            de: "Backend",
            ja: "バックエンド",
            zh: "后端",
            ar: "بيئة العمل الخلفية (Backend)"
        },
        definition: {
            en: "The part of a computer system or application that is not directly accessed by the user, typically responsible for storing and manipulating data.",
            id: "Bagian dari sistem komputer atau aplikasi yang tidak diakses langsung oleh pengguna, biasanya bertanggung jawab untuk menyimpan dan memanipulasi data.",
            es: "La parte de un sistema informático o aplicación que no es accesible directamente por el usuario, generalmente responsable de almacenar y manipular datos.",
            fr: "La partie d'un système informatique ou d'une application qui n'est pas directement accessible par l'utilisateur, généralement responsable du stockage et de la manipulation des données.",
            de: "Der Teil eines Computersystems oder einer Anwendung, auf den der Benutzer nicht direkt zugreift, normalerweise verantwortlich für das Speichern und Manipulieren von Daten.",
            ja: "ユーザーが直接アクセスしない、通常はデータの保存や操作を担当するコンピュータシステムまたはアプリケーションの部分。",
            zh: "计算机系统或应用程序中用户无法直接访问的部分，通常负责存储和操作数据。",
            ar: "جزء من نظام الكمبيوتر أو التطبيق الذي لا يمكن للمستخدم الوصول إليه مباشرة، وعادة ما يكون مسؤولاً عن تخزين البيانات ومعالجتها."
        },
        category: {
            en: "Software Development",
            id: "Pengembangan Perangkat Lunak",
            es: "Desarrollo de Software",
            fr: "Développement Logiciel",
            de: "Softwareentwicklung",
            ja: "ソフトウェア開発",
            zh: "软件开发",
            ar: "تطوير البرمجيات"
        }
    },
    {
        id: "frontend",
        term: {
            en: "Frontend",
            id: "Frontend",
            es: "Frontend",
            fr: "Frontend",
            de: "Frontend",
            ja: "フロントエンド",
            zh: "前端",
            ar: "بيئة العمل الأمامية (Frontend)"
        },
        definition: {
            en: "The part of a web application or website that users see and interact with directly.",
            id: "Bagian dari aplikasi web atau situs web yang dilihat dan berinteraksi langsung dengan pengguna.",
            es: "La parte de una aplicación web o sitio web que los usuarios ven e interactúan directamente.",
            fr: "La partie d'une application Web ou d'un site Web que les utilisateurs voient et avec laquelle ils interagissent directement.",
            de: "Der Teil einer Webanwendung oder Website, den Benutzer direkt sehen und mit dem sie interagieren.",
            ja: "ユーザーが直接見て操作するウェブアプリケーションまたはウェブサイトの部分。",
            zh: "用户直接看到并与之交互的 Web 应用程序或网站的部分。",
            ar: "جزء من تطبيق ويب أو موقع ويب يراه المستخدمون ويتفاعلون معه مباشرة."
        },
        category: {
            en: "Web Development",
            id: "Pengembangan Web",
            es: "Desarrollo Web",
            fr: "Développement Web",
            de: "Webentwicklung",
            ja: "ウェブ開発",
            zh: "Web 开发",
            ar: "تطوير الويب"
        }
    },
    {
        id: "devops",
        term: {
            en: "DevOps",
            id: "DevOps",
            es: "DevOps",
            fr: "DevOps",
            de: "DevOps",
            ja: "デブオプス",
            zh: "开发运维",
            ar: "ديف أوبس (DevOps)"
        },
        definition: {
            en: "A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle.",
            id: "Serangkaian praktik yang menggabungkan pengembangan perangkat lunak (Dev) dan operasi IT (Ops) untuk memperpendek siklus pengembangan sistem.",
            es: "Un conjunto de prácticas que combina el desarrollo de software (Dev) y las operaciones de TI (Ops) para acortar el ciclo de vida de desarrollo de sistemas.",
            fr: "Un ensemble de pratiques qui combine le développement de logiciels (Dev) et les opérations informatiques (Ops) pour raccourcir le cycle de vie du développement des systèmes.",
            de: "Eine Reihe von Praktiken, die Softwareentwicklung (Dev) und IT-Betrieb (Ops) kombinieren, um den Lebenszyklus der Systementwicklung zu verkürzen.",
            ja: "ソフトウェア開発（Dev）とIT運用（Ops）を組み合わせて、システム開発のライフサイクルを短縮するための一連のプラクティス。",
            zh: "一套结合软件开发 (Dev) 和 IT 运营 (Ops) 的实践，旨在缩短系统开发生命周期。",
            ar: "مجموعة من الممارسات التي تجمع بين تطوير البرمجيات (Dev) وعمليات تكنولوجيا المعلومات (Ops) لتقصير دورة حياة تطوير الأنظمة."
        },
        category: {
            en: "Infrastructure",
            id: "Infrastruktur",
            es: "Infraestructura",
            fr: "Infrastructure",
            de: "Infrastruktur",
            ja: "インフラストラクチャ",
            zh: "基础设施",
            ar: "البنية التحتية"
        }
    },
    {
        id: "cloud",
        term: {
            en: "Cloud Computing",
            id: "Komputasi Awan",
            es: "Computación en la nube",
            fr: "Cloud Computing",
            de: "Cloud-Computing",
            ja: "クラウドコンピューティング",
            zh: "云计算",
            ar: "الحوسبة السحابية"
        },
        definition: {
            en: "The delivery of computing services—including servers, storage, databases, networking, software over the Internet.",
            id: "Pengiriman layanan komputasi—termasuk server, penyimpanan, database, jaringan, perangkat lunak melalui Internet.",
            es: "La entrega de servicios de computación, incluidos servidores, almacenamiento, bases de datos, redes, software a través de Internet.",
            fr: "La fourniture de services informatiques, y compris les serveurs, le stockage, les bases de données, la mise en réseau, les logiciels sur Internet.",
            de: "Die Bereitstellung von IT-Dienstleistungen – einschließlich Servern, Speicher, Datenbanken, Netzwerken, Software über das Internet.",
            ja: "サーバー、ストレージ、データベース、ネットワーキング、ソフトウェアなどのコンピューティングサービスをインターネット経由で提供すること。",
            zh: "通过互联网提供计算服务，包括服务器、存储、数据库、网络、软件。",
            ar: "تقديم خدمات الحوسبة — بما في ذلك الخوادم والتخزين وقواعد البيانات والشبكات والبرامج عبر الإنترنت."
        },
        category: {
            en: "Infrastructure",
            id: "Infrastruktur",
            es: "Infraestructura",
            fr: "Infrastructure",
            de: "Infrastruktur",
            ja: "インフラストラクチャ",
            zh: "基础设施",
            ar: "البنية التحتية"
        }
    },
    {
        id: "machine-learning",
        term: {
            en: "Machine Learning",
            id: "Pembelajaran Mesin",
            es: "Aprendizaje Automático",
            fr: "Apprentissage Automatique",
            de: "Maschinelles Lernen",
            ja: "機械学習",
            zh: "机器学习",
            ar: "تعلم الآلة"
        },
        definition: {
            en: "A type of artificial intelligence (AI) that allows software applications to become more accurate in predicting outcomes without being explicitly programmed.",
            id: "Jenis kecerdasan buatan (AI) yang memungkinkan aplikasi perangkat lunak menjadi lebih akurat dalam memprediksi hasil tanpa diprogram secara eksplisit.",
            es: "Un tipo de inteligencia artificial (IA) que permite que las aplicaciones de software sean más precisas al predecir resultados sin estar programadas explícitamente.",
            fr: "Un type d'intelligence artificielle (IA) qui permet aux applications logicielles de devenir plus précises dans la prédiction des résultats sans être explicitement programmées.",
            de: "Eine Art künstliche Intelligenz (KI), die es Softwareanwendungen ermöglicht, Ergebnisse genauer vorherzusagen, ohne explizit programmiert zu werden.",
            ja: "明示的にプログラムされることなく、ソフトウェアアプリケーションが結果を予測する精度を高めることを可能にする人工知能（AI）の一種。",
            zh: "一种人工智能 (AI)，允许软件应用程序在不进行明确编程的情况下更准确地预测结果。",
            ar: "نوع من الذكاء الاصطناعي (AI) يسمح لتطبيقات البرمجيات بأن تصبح أكثر دقة في التنبؤ بالنتائج دون برمجتها بشكل صريح."
        },
        category: {
            en: "Artificial Intelligence",
            id: "Kecerdasan Buatan",
            es: "Inteligencia Artificial",
            fr: "Intelligence Artificielle",
            de: "Künstliche Intelligenz",
            ja: "人工知能",
            zh: "人工智能",
            ar: "الذكاء الاصطناعي"
        }
    },
    {
        id: "cryptography",
        term: {
            en: "Cryptography",
            id: "Kriptografi",
            es: "Criptografía",
            fr: "Cryptographie",
            de: "Kryptographie",
            ja: "暗号技術",
            zh: "密码学",
            ar: "علم التشفير"
        },
        definition: {
            en: "The practice and study of techniques for secure communication in the presence of adversarial behavior.",
            id: "Praktik dan studi tentang teknik komunikasi aman di hadapan perilaku lawan.",
            es: "La práctica y el estudio de técnicas para la comunicación segura en presencia de comportamiento adversario.",
            fr: "La pratique et l'étude des techniques de communication sécurisée en présence d'un comportement adverse.",
            de: "Die Praxis und das Studium von Techniken für die sichere Kommunikation in Gegenwart von gegnerischem Verhalten.",
            ja: "敵対的な行動が存在する場合の安全な通信のための技術の構築と研究。",
            zh: "在存在对手行为的情况下进行安全通信的技术的实践和研究。",
            ar: "ممارسة ودراسة تقنيات الاتصال الآمن في ظل وجود سلوك عدائي."
        },
        category: {
            en: "Security",
            id: "Keamanan",
            es: "Seguridad",
            fr: "Sécurité",
            de: "Sicherheit",
            ja: "セキュリティ",
            zh: "安全",
            ar: "الأمن"
        }
    },
    {
        id: "database",
        term: {
            en: "Database",
            id: "Basis Data",
            es: "Base de datos",
            fr: "Base de données",
            de: "Datenbank",
            ja: "データベース",
            zh: "数据库",
            ar: "قاعدة بيانات"
        },
        definition: {
            en: "An organized collection of structured information, or data, typically stored electronically in a computer system.",
            id: "Kumpulan informasi terstruktur yang terorganisir, atau data, biasanya disimpan secara elektronik dalam sistem komputer.",
            es: "Una colección organizada de información estructurada, o datos, generalmente almacenados electrónicamente en un sistema informático.",
            fr: "Une collection organisée d'informations structurées, ou de données, généralement stockées électroniquement dans un sistema informático.",
            de: "Eine organisierte Sammlung strukturierter Informationen oder Daten, die normalerweise elektronisch in einem Computersystem gespeichert sind.",
            ja: "構造化された情報またはデータの整理されたコレクションであり、通常はコンピュータシステムに電子的に保存されます。",
            zh: "结构化信息或数据的有序集合，通常以电子方式存储在计算机系统中。",
            ar: "مجموعة منظمة من المعلومات الهيكلية، أو البيانات، يتم تخزينها عادةً إلكترونيًا في نظام الكمبيوتر."
        },
        category: {
            en: "Data Management",
            id: "Manajemen Data",
            es: "Gestión de Datos",
            fr: "Gestion des données",
            de: "Datenmanagement",
            ja: "データ管理",
            zh: "数据管理",
            ar: "إدارة البيانات"
        }
    }
];

export const uiLabels = {
    en: {
        title: "IT Note",
        subtitle: "IT terms list to help your learning journey.",
        placeholder: "Search IT terms (e.g., API, Docker, Cloud)...",
        noResults: "Terms not found. Try another keyword.",
        language: "Language"
    },
    id: {
        title: "IT Note",
        subtitle: "Daftar istilah IT untuk membantu perjalanan belajar kamu.",
        placeholder: "Cari istilah IT (misal: API, Docker, Cloud)...",
        noResults: "Istilah tidak ditemukan. Coba kata kunci lain.",
        language: "Bahasa"
    },
    es: {
        title: "IT Note",
        subtitle: "Lista de términos de TI para ayudar en su viaje de aprendizaje.",
        placeholder: "Buscar términos de TI (ej. API, Docker, Cloud)...",
        noResults: "Términos no encontrados. Pruebe con otra palabra clave.",
        language: "Idioma"
    },
    fr: {
        title: "IT Note",
        subtitle: "Liste des termes informatiques pour aider votre parcours d'apprentissage.",
        placeholder: "Rechercher des termes informatiques (ex. API, Docker, Cloud)...",
        noResults: "Termes non trouvés. Essayez un autre mot-clé.",
        language: "Langue"
    },
    de: {
        title: "IT Note",
        subtitle: "Liste von IT-Begriffen, um Ihre Lernreise zu unterstützen.",
        placeholder: "IT-Begriffe suchen (z. B. API, Docker, Cloud)...",
        noResults: "Begriffe nicht gefunden. Versuchen Sie es mit einem anderen Schlüsselwort.",
        language: "Sprache"
    },
    ja: {
        title: "IT Note",
        subtitle: "学習を助けるIT用語リスト。",
        placeholder: "IT用語を検索 (例: API、Docker、Cloud)...",
        noResults: "用語が見つかりません。別のキーワードを試してください。",
        language: "言語"
    },
    zh: {
        title: "IT Note",
        subtitle: "帮助您学习旅程的 IT 术语列表。",
        placeholder: "搜索 IT 术语 (例如 API、Docker、Cloud)...",
        noResults: "未找到术语。请尝试其他关键词。",
        language: "语言"
    },
    ar: {
        title: "IT Note",
        subtitle: "قائمة مصطلحات تكنولوجيا المعلومات لمساعدة رحلة التعلم الخاصة بك.",
        placeholder: "البحث عن مصطلحات تقنية (مثل API، Docker، Cloud)...",
        noResults: "لم يتم العثور على المصطلحات. جرب كلمة رئيسية أخرى.",
        language: "اللغة"
    }
};

export default itTerms;

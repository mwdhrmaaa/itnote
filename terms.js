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
    },
    {
        id: "docker",
        term: {
            en: "Docker",
            id: "Docker",
            es: "Docker",
            fr: "Docker",
            de: "Docker",
            ja: "ドッカー",
            zh: "Docker",
            ar: "دوكر (Docker)"
        },
        definition: {
            en: "A platform for developing, shipping, and running applications in containers.",
            id: "Platform untuk mengembangkan, mengirim, dan menjalankan aplikasi dalam kontainer.",
            es: "Una plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.",
            fr: "Une plateforme pour développer, expédier et exécuter des applications dans des conteneurs.",
            de: "Eine Plattform zum Entwickeln, Ausliefern und Ausführen von Anwendungen in Containern.",
            ja: "コンテナ内でアプリケーションを開発、配信、実行するためのプラットフォーム。",
            zh: "一个用于在容器中开发、交付和运行应用程序的平台。",
            ar: "منصة لتطوير وشحن وتشغيل التطبيقات في حاويات."
        },
        category: {
            en: "DevOps",
            id: "DevOps",
            es: "DevOps",
            fr: "DevOps",
            de: "DevOps",
            ja: "デブオプス",
            zh: "开发运维",
            ar: "ديف أوبس (DevOps)"
        }
    },
    {
        id: "kubernetes",
        term: {
            en: "Kubernetes",
            id: "Kubernetes",
            es: "Kubernetes",
            fr: "Kubernetes",
            de: "Kubernetes",
            ja: "クバネティス",
            zh: "Kubernetes",
            ar: "كوبرنيتيس (Kubernetes)"
        },
        definition: {
            en: "An open-source system for automating deployment, scaling, and management of containerized applications.",
            id: "Sistem sumber terbuka untuk mengotomatisasi penerapan, penskalaan, dan manajemen aplikasi berbasis kontainer.",
            es: "Un sistema de código abierto para automatizar la implementación, el escalado y la gestión de aplicaciones en contenedores.",
            fr: "Un système open source pour automatiser le déploiement, la mise à l'échelle et la gestion des applications conteneurisées.",
            de: "Ein Open-Source-System zur Automatisierung der Bereitstellung, Skalierung und Verwaltung von containerisierten Anwendungen.",
            ja: "コンテナ化されたアプリケーションのデプロイ、スケーリング、管理を自動化するためのオープンソースシステム。",
            zh: "用于自动化容器化应用程序的部署、扩展和管理的开源系统。",
            ar: "نظام مفتوح المصدر لأتمتة نشر وتوسيع وإدارة التطبيقات المعبأة في حاويات."
        },
        category: {
            en: "DevOps",
            id: "DevOps",
            es: "DevOps",
            fr: "DevOps",
            de: "DevOps",
            ja: "デブオプス",
            zh: "开发运维",
            ar: "ديف أوبس (DevOps)"
        }
    },
    {
        id: "git",
        term: {
            en: "Git",
            id: "Git",
            es: "Git",
            fr: "Git",
            de: "Git",
            ja: "ギット",
            zh: "Git",
            ar: "جيت (Git)"
        },
        definition: {
            en: "A free and open source distributed version control system designed to handle everything from small to very large projects.",
            id: "Sistem kontrol versi terdistribusi gratis dan sumber terbuka yang dirancang untuk menangani segalanya mulai dari proyek kecil hingga sangat besar.",
            es: "Un sistema de código abierto para automatizar la implementación, el escalado y la gestión de aplicaciones en contenedores.",
            fr: "Un système open source pour automatiser le déploiement, la mise à l'échelle et la gestion des applications conteneurisées.",
            de: "Ein kostenloses und Open-Source-verteiltes Versionskontrollsystem, das für alles entwickelt wurde, von kleinen bis hin zu sehr großen Projekten.",
            ja: "小規模から非常に大規模なプロジェクトまで、あらゆるものを処理できるように設計された、無料のオープンソース分散型バージョン管理システム。",
            zh: "一个免费且开源的分布式版本控制系统，旨在处理从小到大的所有项目。",
            ar: "نظام تحكم في الإصدارات موزع ومفتوح المصدر مصمم للتعامل مع كل شيء من المشاريع الصغيرة إلى الكبيرة جدًا."
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
        id: "sql",
        term: {
            en: "SQL",
            id: "SQL",
            es: "SQL",
            fr: "SQL",
            de: "SQL",
            ja: "SQL",
            zh: "SQL",
            ar: "لغة الاستعلام المهيكلة (SQL)"
        },
        definition: {
            en: "Structured Query Language. A standard language for managing data held in a relational database management system.",
            id: "Bahasa kueri terstruktur. Bahasa standar untuk mengelola data yang disimpan dalam sistem manajemen database relasional.",
            es: "Lenguaje de consulta estructurado. Un lenguaje estándar para administrar datos contenidos en un sistema de administración de bases de datos relacionales.",
            fr: "Langage de requête structuré. Un langage standard pour gérer les données conservées dans un système de gestion de base de données relationnelle.",
            de: "Strukturierte Abfragesprache. Eine Standardsprache für die Verwaltung von Daten in einem relationalen Datenbankmanagementsystem.",
            ja: "構造化クエリ言語。リレーショナルデータベース管理システムで保持されるデータを管理するための標準言語。",
            zh: "结构化查询语言。用于管理关系数据库管理系统中保存的数据的标准语言。",
            ar: "لغة الاستعلام المهيكلة. لغة قياسية لإدارة البيانات المحفوظة في نظام إدارة قواعد البيانات العلائقية."
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
    },
    {
        id: "nosql",
        term: {
            en: "NoSQL",
            id: "NoSQL",
            es: "NoSQL",
            fr: "NoSQL",
            de: "NoSQL",
            ja: "NoSQL",
            zh: "NoSQL",
            ar: "NoSQL"
        },
        definition: {
            en: "A non-relational database that provides a mechanism for storage and retrieval of data modeled in means other than the tabular relations used in relational databases.",
            id: "Database non-relasional yang menyediakan mekanisme penyimpanan dan pengambilan data yang dimodelkan dengan cara selain relasi tabular yang digunakan dalam database relasional.",
            es: "Una base de datos no relacional que proporciona un mecanismo para el almacenamiento y la recuperación de datos modelados por otros medios que no sean las relaciones tabulares utilizadas en las bases de datos relacionales.",
            fr: "Une base de données non relationnelle qui fournit un mécanisme de stockage et de récupération de données modélisées par des moyens autres que les relations tabulares utilisées dans les bases de données relationnelles.",
            de: "Eine nicht-relationale Datenbank, die einen Mechanismus für die Speicherung und den Abruf von Daten bereitstellt, die auf andere Weise als die in relationalen Datenbanken verwendeten tabellarischen Beziehungen modelliert sind.",
            ja: "リレーショナルデータベースで使用されるテーブル関係以外の手段でモデル化されたデータの保存と取得のためのメカニズムを提供する非リレーショナルデータベース。",
            zh: "一种非关系数据库，它提供了一种存储和检索数据建模机制，而不是关系数据库中使用的表格关系。",
            ar: "قاعدة بيانات غير علائقية توفر آلية لتخزين واسترجاع البيانات المصممة بطرق أخرى غير العلاقات الجدولية المستخدمة في قواعد البيانات العلائقية."
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
    },
    {
        id: "microservices",
        term: {
            en: "Microservices",
            id: "Mikrolayanan",
            es: "Microservicios",
            fr: "Microservices",
            de: "Microservices",
            ja: "マイクロサービス",
            zh: "微服务",
            ar: "الخدمات المصغرة (Microservices)"
        },
        definition: {
            en: "An architectural style that structures an application as a collection of services that are highly maintainable, testable, and loosely coupled.",
            id: "Gaya arsitektur yang menstrukturkan aplikasi sebagai kumpulan layanan yang sangat dapat dipelihara, diuji, dan digabungkan secara longgar.",
            es: "Un estilo arquitectónico que estructura una aplicación como una colección de servicios que son altamente mantenibles, comprobables y débilmente acoplados.",
            fr: "Un style architectural qui structure une application comme une collection de services hautement maintenables, testables et lâchement couplés.",
            de: "Ein Architekturstil, der eine Anwendung als eine Sammlung von Diensten strukturiert, die hochgradig wartbar, testbar und lose gekoppelt sind.",
            ja: "アプリケーションを、高度に保守可能、テスト可能、かつ疎結合なサービスの集合として構築するアーキテクチャスタイル。",
            zh: "一种架构风格，将应用程序构建为一组高度可维护、可测试且松散耦合的服务集合。",
            ar: "نمط معماري ينظم التطبيق كمجموعة من الخدمات التي يمكن صيانتها واختبارها بدرجة عالية وهي مترابطة بشكل فضفاض."
        },
        category: {
            en: "Architecture",
            id: "Arsitektur",
            es: "Arquitectura",
            fr: "Architecture",
            de: "Architektur",
            ja: "アーキテクチャ",
            zh: "架构",
            ar: "المعمارية"
        }
    },
    {
        id: "serverless",
        term: {
            en: "Serverless",
            id: "Nirserver",
            es: "Serverless",
            fr: "Serverless",
            de: "Serverless",
            ja: "サーバーレス",
            zh: "无服务器",
            ar: "بدون خادم (Serverless)"
        },
        definition: {
            en: "A cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers.",
            id: "Model eksekusi komputasi awan di mana penyedia layanan cloud secara dinamis mengelola alokasi dan penyediaan server.",
            es: "Un modelo de ejecución de computación en la nube donde el proveedor de la nube gestiona dinámicamente la asignación y el aprovisionamiento de servidores.",
            fr: "Un modèle d'exécution de cloud computing où le fournisseur de cloud gère dynamiquement l'allocation et le provisionnement des serveurs.",
            de: "Ein Cloud-Computing-Ausführungsmodell, bei dem der Cloud-Anbieter die Zuweisung und Bereitstellung von Servern dynamisch verwaltet.",
            ja: "クラウドプロバイダーがサーバーの割り当てとプロビジョニングを動的に管理するクラウドコンピューティングの実行モデル。",
            zh: "一种云计算执行模型，云提供商动态管理服务器的分配和配置。",
            ar: "نموذج تنفيذ الحوسبة السحابية حيث يدير مزود السحابة ديناميكيًا تخصيص وتوفير الخوادم."
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
        id: "python",
        term: {
            en: "Python",
            id: "Python",
            es: "Python",
            fr: "Python",
            de: "Python",
            ja: "パイソン",
            zh: "Python",
            ar: "بايثون (Python)"
        },
        definition: {
            en: "An interpreted, high-level, general-purpose programming language known for its readability.",
            id: "Bahasa pemrograman tingkat tinggi, interpreted, dan serbaguna yang dikenal karena keterbacaannya.",
            es: "Un lenguaje de programación interpretado, de alto nivel y de propósito general conocido por su legibilidad.",
            fr: "Un langage de programmation interprété, de haut niveau et à usage général, connu pour sa lisibilité.",
            de: "Eine interpretierte, hochgradige Mehrzweck-Programmiersprache, die für ihre Lesbarkeit bekannt ist.",
            ja: "読みやすさで知られる、インタプリタ形式のハイレベルな汎用プログラミング言語。",
            zh: "一种解释型、高级、通用的编程语言，以其可读性而闻名。",
            ar: "لغة برمجة مفسرة، عالية المستوى، عامة الغرض ومعروفة بوضوح شفرتها البرمجية."
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
        id: "javascript",
        term: {
            en: "JavaScript",
            id: "JavaScript",
            es: "JavaScript",
            fr: "JavaScript",
            de: "JavaScript",
            ja: "ジャバスクリプト",
            zh: "JavaScript",
            ar: "جافا سكريبت (JavaScript)"
        },
        definition: {
            en: "A high-level, often just-in-time compiled language that is one of the core technologies of the World Wide Web.",
            id: "Bahasa pemrograman tingkat tinggi, yang sering dikompilasi tepat waktu (just-in-time), yang merupakan salah satu teknologi inti integrasi World Wide Web.",
            es: "Un lenguaje interpretado de alto nivel que cumple con la especificación ECMAScript y es una de las tecnologías centrales de la World Wide Web.",
            fr: "Un langage de haut niveau, souvent compilé juste à temps, qui est l'une des technologies de base du World Wide Web.",
            de: "Eine hochgradige, oft Just-in-Time-kompilierte Sprache, die eine der Kerntechnologien des World Wide Web ist.",
            ja: "World Wide Webのコアテクノロジーの1つである、ハイレベルで多くの場合ジャストインタイムでコンパイルされる言語。",
            zh: "一种高级的、通常即时编译的语言，是万维网的核心技术之一。",
            ar: "لغة عالية المستوى، غالباً ما يتم تجميعها في الوقت المناسب (just-in-time)، وهي إحدى التقنيات الأساسية للويب."
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
        id: "firewall",
        term: {
            en: "Firewall",
            id: "Tembok Api (Firewall)",
            es: "Cortafuegos",
            fr: "Pare-feu",
            de: "Firewall",
            ja: "ファイアウォール",
            zh: "防火墙",
            ar: "جدار حماية (Firewall)"
        },
        definition: {
            en: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
            id: "Sistem keamanan jaringan yang memantau dan mengontrol lalu lintas jaringan masuk dan keluar berdasarkan aturan keamanan yang ditentukan sebelumnya.",
            es: "Un sistema de seguridad de red que monitorea y controla el tráfico de red entrante y saliente según reglas de seguridad predeterminadas.",
            fr: "Un système de sécurité réseau qui surveille et contrôle le trafic réseau entrant et sortant en fonction de règles de sécurité prédéfinies.",
            de: "Ein Netzwerksicherheitssystem, das den ein- und ausgehenden Netzwerkverkehr basierend auf vorgegebenen Sicherheitsregeln überwacht und steuert.",
            ja: "あらかじめ決められたセキュリティルールに基づいて、ネットワークへの入り口や出口でトラフィックを監視・制御するセキュリティシステム。",
            zh: "一种根据预定的安全规则监控和控制进出网络流量的网络安全系统。",
            ar: "نظام أمان للشبكة يراقب ويتحكم في حركة مرور الشبكة الواردة والصادرة بناءً على قواعد أمان محددة مسبقًا."
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
        id: "agile",
        term: {
            en: "Agile",
            id: "Agile",
            es: "Agile",
            fr: "Agile",
            de: "Agile",
            ja: "アジャイル",
            zh: "敏捷",
            ar: "أجايل (Agile)"
        },
        definition: {
            en: "A software development methodology based on iterative development and frequent feedback.",
            id: "Metodologi pengembangan perangkat lunak berdasarkan pengembangan iteratif dan umpan balik yang sering.",
            es: "Una metodología de desarrollo de software basada en el desarrollo iterativo y la retroalimentación frecuente.",
            fr: "Une méthodologie de développement logiciel basée sur un développement itératif et des feedbacks fréquents.",
            de: "Eine Methode zur Softwareentwicklung, die auf iterativer Entwicklung und häufigem Feedback basiert.",
            ja: "反復的な開発と頻繁なフィードバックに基づいたソフトウェア開発手法。",
            zh: "一种基于迭代开发和频繁反馈的软件开发方法。",
            ar: "منهجية لتطوير البرمجيات تعتمد على التطوير المتكرر والملاحظات المستمرة."
        },
        category: {
            en: "Methodology",
            id: "Metodologi",
            es: "Metodología",
            fr: "Méthodologie",
            de: "Methodik",
            ja: "手法",
            zh: "方法论",
            ar: "المنهجية"
        }
    }
    {
        id: "react",
        term: {
            en: "React",
            id: "React",
            es: "React",
            fr: "React",
            de: "React",
            ja: "リアクト (React)",
            zh: "React",
            ar: "رياكت (React)"
        },
        definition: {
            en: "A popular JavaScript library for building user interfaces, particularly single-page applications.",
            id: "Library JavaScript populer untuk membangun antarmuka pengguna, terutama aplikasi satu halaman (SPA).",
            es: "Una biblioteca de JavaScript popular para crear interfaces de usuario, especialmente aplicaciones de una sola página.",
            fr: "Une bibliothèque JavaScript populaire pour créer des interfaces utilisateur, en particulier des applications d'une seule page.",
            de: "Eine beliebte JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen, insbesondere für Einzelseitenanwendungen.",
            ja: "ユーザーインターフェース、特にシングルページアプリケーションを構築するための人気のJavaScriptライブラリ。",
            zh: "一个用于构建用户界面的流行 JavaScript 库，特别是单页应用程序。",
            ar: "مكتبة جافا سكريبت شهيرة لبناء واجهات المستخدم، وخاصة تطبيقات الصفحة الواحدة."
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
        id: "vue",
        term: {
            en: "Vue.js",
            id: "Vue.js",
            es: "Vue.js",
            fr: "Vue.js",
            de: "Vue.js",
            ja: "ビュー (Vue.js)",
            zh: "Vue.js",
            ar: "فيو (Vue.js)"
        },
        definition: {
            en: "A progressive JavaScript framework for building user interfaces and single-page applications.",
            id: "Framework JavaScript progresif untuk membangun antarmuka pengguna dan aplikasi satu halaman.",
            es: "Un marco de JavaScript progresivo para crear interfaces de usuario y aplicaciones de una sola página.",
            fr: "Un framework JavaScript progressif pour créer des interfaces utilisateur et des applications d'une seule page.",
            de: "Ein progressives JavaScript-Framework zum Erstellen von Benutzeroberflächen und Einzelseitenanwendungen.",
            ja: "ユーザーインターフェースやシングルページアプリケーションを構築するためのプログレッシブJavaScriptフレームワーク。",
            zh: "一个用于构建用户界面和单页应用程序的渐进式 JavaScript 框架。",
            ar: "إطار عمل جافا سكريبت تدريجي لبناء واجهات المستخدم وتطبيقات الصفحة الواحدة."
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
        id: "angular",
        term: {
            en: "Angular",
            id: "Angular",
            es: "Angular",
            fr: "Angular",
            de: "Angular",
            ja: "アンギュラー (Angular)",
            zh: "Angular",
            ar: "أنجولار (Angular)"
        },
        definition: {
            en: "A platform and framework for building single-page client applications using HTML and TypeScript.",
            id: "Platform dan framework untuk membangun aplikasi klien satu halaman menggunakan HTML dan TypeScript.",
            es: "Una plataforma y marco para crear aplicaciones de cliente de una sola página utilizando HTML y TypeScript.",
            fr: "Une plateforme et un framework pour créer des applications clientes d'une seule page à l'aide de HTML et TypeScript.",
            de: "Eine Plattform und ein Framework zum Erstellen von Einzelseiten-Clientanwendungen mit HTML und TypeScript.",
            ja: "HTMLとTypeScriptを使用してシングルページクライアントアプリケーションを構築するためのプラットフォームおよびフレームワーク。",
            zh: "一个使用 HTML 和 TypeScript 构建单页客户端应用程序的平台和框架。",
            ar: "منصة وإطار عمل لبناء تطبيقات عميل الصفحة الواحدة باستخدام HTML و TypeScript."
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
        id: "nodejs",
        term: {
            en: "Node.js",
            id: "Node.js",
            es: "Node.js",
            fr: "Node.js",
            de: "Node.js",
            ja: "Node.js",
            zh: "Node.js",
            ar: "نود جي إس (Node.js)"
        },
        definition: {
            en: "An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.",
            id: "Runtime environment JavaScript open-source lintas platform yang mengeksekusi kode JavaScript di luar browser web.",
            es: "Un entorno de tiempo de ejecución de JavaScript multiplataforma y de código abierto que ejecuta código JavaScript fuera de un navegador web.",
            fr: "Un environnement d'exécution JavaScript open source et multiplateforme qui exécute du code JavaScript en dehors d'un navigateur Web.",
            de: "Eine Open-Source-, plattformübergreifende JavaScript-Laufzeitumgebung, die JavaScript-Code außerhalb eines Webbrowsers ausführt.",
            ja: "ウェブブラウザの外部でJavaScriptコードを実行する、オープンソースでクロスプラットフォームのJavaScriptランタイム環境。",
            zh: "一个开源、跨平台的 JavaScript 运行时环境，在 Web 浏览器之外执行 JavaScript 代码。",
            ar: "بيئة تشغيل جافا سكريبت مفتوحة المصدر ومتعددة المنصات تقوم بتنفيذ كود جافا سكريبت خارج متصفح الويب."
        },
        category: {
            en: "Backend Development",
            id: "Pengembangan Backend",
            es: "Desarrollo Backend",
            fr: "Développement Backend",
            de: "Backend-Entwicklung",
            ja: "バックエンド開発",
            zh: "后端开发",
            ar: "تطوير بيئة العمل الخلفية"
        }
    },
    {
        id: "express",
        term: {
            en: "Express.js",
            id: "Express.js",
            es: "Express.js",
            fr: "Express.js",
            de: "Express.js",
            ja: "Express.js",
            zh: "Express.js",
            ar: "إكسبريس جي إس (Express.js)"
        },
        definition: {
            en: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
            id: "Framework aplikasi web Node.js yang minimal dan fleksibel yang menyediakan serangkaian fitur kuat untuk aplikasi web dan seluler.",
            es: "Un marco de aplicación web Node.js mínimo y flexible que proporciona un conjunto sólido de características para aplicaciones web y móviles.",
            fr: "Un framework d'application Web Node.js minimal et flexible qui fournit un ensemble robuste de fonctionnalités pour les applications Web et mobiles.",
            de: "Ein minimales und flexibles Node.js-Webanwendungs-Framework, das eine robusten Satz von Funktionen für Web- und Mobilanwendungen bereitstellt.",
            ja: "ウェブおよびモバイルアプリケーション向けの堅牢な機能セットを提供する、最小限で柔軟なNode.jsウェブアプリケーションフレームワーク。",
            zh: "一个极简且灵活的 Node.js Web 应用程序框架，为 Web 和移动应用程序提供了一套强大的功能。",
            ar: "إطار عمل لتطبيقات الويب نود جي إس بسيط ومرن يوفر مجموعة قوية من الميزات لتطبيقات الويب والجوال."
        },
        category: {
            en: "Backend Development",
            id: "Pengembangan Backend",
            es: "Desarrollo Backend",
            fr: "Développement Backend",
            de: "Backend-Entwicklung",
            ja: "バックエンド開発",
            zh: "后端开发",
            ar: "تطوير بيئة العمل الخلفية"
        }
    },
    {
        id: "django",
        term: {
            en: "Django",
            id: "Django",
            es: "Django",
            fr: "Django",
            de: "Django",
            ja: "ジャンゴ (Django)",
            zh: "Django",
            ar: "ديجانجو (Django)"
        },
        definition: {
            en: "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
            id: "Framework web Python tingkat tinggi yang mendorong pengembangan cepat dan desain yang bersih serta pragmatis.",
            es: "Un marco web Python de alto nivel que fomenta el desarrollo rápido y un diseño limpio y pragmático.",
            fr: "Un framework Web Python de haut niveau qui encourage un développement rapide et une conception propre et pragmatique.",
            de: "Ein hochgradiges Python-Web-Framework, das eine schnelle Entwicklung und ein sauberes, pragmatisches Design fördert.",
            ja: "迅速な開発とクリーンで実用的な設計を促進する、ハイレベルなPythonウェブフレームワーク。",
            zh: "一个高级的 Python Web 框架，鼓励快速开发和简洁、务实的设计。",
            ar: "إطار عمل ويب بايثون عالي المستوى يشجع على التطوير السريع والتصميم النظيف والبراغماتي."
        },
        category: {
            en: "Backend Development",
            id: "Pengembangan Backend",
            es: "Desarrollo Backend",
            fr: "Développement Backend",
            de: "Backend-Entwicklung",
            ja: "バックエンド開発",
            zh: "后端开发",
            ar: "تطوير بيئة العمل الخلفية"
        }
    },
    {
        id: "laravel",
        term: {
            en: "Laravel",
            id: "Laravel",
            es: "Laravel",
            fr: "Laravel",
            de: "Laravel",
            ja: "ララベル (Laravel)",
            zh: "Laravel",
            ar: "لارافل (Laravel)"
        },
        definition: {
            en: "An open-source PHP web framework known for its expressive and elegant syntax, following the MVC architectural pattern.",
            id: "Framework web PHP open-source yang dikenal dengan sintaksisnya yang ekspresif dan elegan, mengikuti pola arsitektur MVC.",
            es: "Un marco web PHP de código abierto conocido por su sintaxis expresiva y elegante, que sigue el patrón arquitectónico MVC.",
            fr: "Un framework Web PHP open source connu pour sa syntaxe expressive et élégante, suivant le modèle architectural MVC.",
            de: "Ein Open-Source-PHP-Web-Framework, das für seine expressive und elegante Syntax bekannt ist und dem MVC-Architekturmuster folgt.",
            ja: "MVCアーキテクチャパターンに従い、表現力豊かでエレガントな構文で知られるオープンソースのPHPウェブフレームワーク。",
            zh: "一个开源的 PHP Web 框架，以其表现力丰富且优雅的语法而闻名，遵循 MVC 架构模式。",
            ar: "إطار عمل ويب PHP مفتوح المصدر معروف بتركيبه التعبيري والأنيق، ويتبع نمط هندسة MVC."
        },
        category: {
            en: "Backend Development",
            id: "Pengembangan Backend",
            es: "Desarrollo Backend",
            fr: "Développement Backend",
            de: "Backend-Entwicklung",
            ja: "バックエンド開発",
            zh: "后端开发",
            ar: "تطوير بيئة العمل الخلفية"
        }
    },
    {
        id: "rails",
        term: {
            en: "Ruby on Rails",
            id: "Ruby on Rails",
            es: "Ruby on Rails",
            fr: "Ruby on Rails",
            de: "Ruby on Rails",
            ja: "Ruby on Rails",
            zh: "Ruby on Rails",
            ar: "روبي على قضبان (Ruby on Rails)"
        },
        definition: {
            en: "A server-side web application framework written in Ruby under the MIT License.",
            id: "Framework aplikasi web sisi server yang ditulis dalam Ruby di bawah Lisensi MIT.",
            es: "Un marco de aplicación web del lado del servidor escrito en Ruby bajo la licencia MIT.",
            fr: "Un framework d'application Web côté serveur écrit en Ruby sous licence MIT.",
            de: "Ein serverseitiges Webanwendungs-Framework, das in Ruby unter der MIT-Lizenz geschrieben wurde.",
            ja: "MITライセンスの下でRubyで書かれた、サーバーサイドウェブアプリケーションフレームワーク。",
            zh: "一个在 MIT 许可下使用 Ruby 编写的服务器端 Web 应用程序框架。",
            ar: "إطار عمل لتطبيقات الويب من جانب الخادم مكتوب بلغة Ruby بموجب ترخيص MIT."
        },
        category: {
            en: "Backend Development",
            id: "Pengembangan Backend",
            es: "Desarrollo Backend",
            fr: "Développement Backend",
            de: "Backend-Entwicklung",
            ja: "バックエンド開発",
            zh: "后端开发",
            ar: "تطوير بيئة العمل الخلفية"
        }
    },
    {
        id: "springboot",
        term: {
            en: "Spring Boot",
            id: "Spring Boot",
            es: "Spring Boot",
            fr: "Spring Boot",
            de: "Spring Boot",
            ja: "Spring Boot",
            zh: "Spring Boot",
            ar: "سبرينغ بوت (Spring Boot)"
        },
        definition: {
            en: "An open-source Java-based framework used to create a microservice based on the Spring Framework.",
            id: "Framework berbasis Java open-source yang digunakan untuk membuat mikrolayanan berbasis Spring Framework.",
            es: "Un marco basado en Java de código abierto utilizado para crear un microservicio basado en Spring Framework.",
            fr: "Un framework basé sur Java open source utilisé pour créer un microservice basé sur le framework Spring.",
            de: "Ein Open-Source-Java-basiertes Framework, das zur Erstellung von Mikroservices auf Basis des Spring-Frameworks verwendet wird.",
            ja: "Spring Frameworkに基づいたマイクロサービスを作成するために使用される、オープンソースのJavaベースのフレームワーク。",
            zh: "一个开源的基于 Java 的框架，用于基于 Spring 框架创建微服务。",
            ar: "إطار عمل مفتوح المصدر يعتمد على Java ويستخدم لإنشاء خدمة مصغرة تعتمد على إطار عمل Spring."
        },
        category: {
            en: "Backend Development",
            id: "Pengembangan Backend",
            es: "Desarrollo Backend",
            fr: "Développement Backend",
            de: "Backend-Entwicklung",
            ja: "バックエンド開発",
            zh: "后端开发",
            ar: "تطوير بيئة العمل الخلفية"
        }
    },
    {
        id: "aspnet",
        term: {
            en: "ASP.NET",
            id: "ASP.NET",
            es: "ASP.NET",
            fr: "ASP.NET",
            de: "ASP.NET",
            ja: "ASP.NET",
            zh: "ASP.NET",
            ar: "ASP.NET"
        },
        definition: {
            en: "An open-source server-side web application framework designed by Microsoft for web development to produce dynamic web pages.",
            id: "Framework aplikasi web sisi server open-source yang dirancang oleh Microsoft untuk pengembangan web guna menghasilkan halaman web dinamis.",
            es: "Un marco de aplicación web del lado del servidor de código abierto diseñado por Microsoft para el desarrollo web para producir páginas web dinámicas.",
            fr: "Un framework d'application Web côté serveur open source conçu par Microsoft pour le développement Web afin de produire des pages Web dynamiques.",
            de: "Ein Open-Source-serverseitiges Webanwendungs-Framework, das von Microsoft für die Webentwicklung entwickelt wurde, um dynamische Webseiten zu erstellen.",
            ja: "動的なウェブページを作成するためにMicrosoftによって設計された、オープンソースのサーバーサイドウェブアプリケーションフレームワーク。",
            zh: "一个由 Microsoft 设计的开源服务器端 Web 应用程序框架，用于动态 Web 页面开发。",
            ar: "إطار عمل لتطبيقات الويب من جانب الخادم مفتوح المصدر صممته شركة Microsoft لتطوير الويب لإنتاج صفحات ويب ديناميكية."
        },
        category: {
            en: "Backend Development",
            id: "Pengembangan Backend",
            es: "Desarrollo Backend",
            fr: "Développement Backend",
            de: "Backend-Entwicklung",
            ja: "バックエンド開発",
            zh: "后端开发",
            ar: "تطوير بيئة العمل الخلفية"
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

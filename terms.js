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

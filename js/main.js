// Данные демонов - 20 верифицированных уровней
const demons = ref([
    {
        id: 1,
        name: "Sakupen",
        author: "Nagasaki",
        position: 1,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=verification_link",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Nagasaki",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://youtube.com/watch?v=victory" },
            { user: "Tonyeye", percent: 100, link: "https://youtube.com/watch?v=victory" }
        ]
    },
    {
        id: 2,
        name: "Pulsar",
        author: "Gdsher228", 
        position: 2,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "Free To Copy",
        verifier: "Gdsher228",
        records: [
            { user: "Skrejj009", percent: 65, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 3,
        name: "Fire hell",
        author: "DudeArctik",
        position: 3,
        difficulty: "Extreme Demon", 
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Skrejj009r",
        records: [
            { user: "DudeArctik", percent: 46, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 4,
        name: "Sweet Dream",
        author: "Nagasaki",
        position: 4,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc", 
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Nagasaki",
        records: []
    },
    {
        id: 5,
        name: "Night Sky",
        author: "Nagasaki",
        position: 5,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=verification_link",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Nagasaki",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://youtube.com/watch?v=victory" },
            { user: "Tonyeye", percent: 100, link: "https://youtube.com/watch?v=victory" }
        ]
    },
    // Остальные демоны (позиции 6-21)
    {
        id: 6,
        name: "Love is",
        author: "nocssnew",
        position: 6,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "nocssnew's friend",
        records: [
            { user: "nocssnew's friend", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Nagasaki", percent: 100, link: "https://youtube.com/watch?v=link", comment: "возможно читер" },
            { user: "Tonyeye", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "DudeArctik", percent: 2, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 7,
        name: "HeartBeat", 
        author: "Nagasaki",
        position: 7,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Zoink",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Tonyeye", percent: 100, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 8,
        name: "every start",
        author: "Max2526462",
        position: 8,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified", 
        videoLink: "No data",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Unknown",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Tonyeye", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "DudeArctik", percent: 100, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 9,
        name: "Hard demon",
        author: "a11vaw",
        position: 9,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "a11vaw",
        records: []
    },
    {
        id: 10,
        name: "Silent",
        author: "Extreme",
        position: 10,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Extreme",
        records: [
            { user: "Extreme", percent: 100, link: "https://youtube.com/watch?v=MgJeijBGKHU" },
            { user: "Skrejj009", percent: 99, link: "https://youtube.com/watch?v=MgJeijBGKHU" }
        ]
    },
    {
        id: 11,
        name: "Creo Sphere",
        author: "Nagasaki",
        position: 11,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Nagasaki",
        records: [
            { user: "Tonyeye", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Nagasaki", percent: 100, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 12,
        name: "kocmoc",
        author: "The4lovek",
        position: 12,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Tonyeye",
        records: [
            { user: "Extreme", percent: 3, link: "https://youtube.com/watch?v=link", comment: "Был занят, даже не пытался" },
            { user: "Nagasaki", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Tonyeye", percent: 100, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 13,
        name: "When you find m3",
        author: "Tonyeye",
        position: 13,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Tonyeye",
        records: [
            { user: "DudeArctik", percent: 100, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 14,
        name: "fallen angel",
        author: "Nagasaki",
        position: 14,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "zoink",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Tonyeye", percent: 100, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 15,
        name: "You love again",
        author: "Gogolik22",
        position: 15,
        difficulty: "Extreme Demon",
        progress: 0,
        status: "unverified",
        videoLink: "",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "",
        records: []
    },
    {
        id: 16,
        name: "Blaster temple",
        author: "Max2526462",
        position: 16,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Extreme",
        records: [
            { user: "Gogolik22", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Tonyeye", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Nagasaki", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Max2526462", percent: 7, link: "https://youtube.com/watch?v=link" },
            { user: "DudeArctik", percent: 7, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 17,
        name: "Purgatori",
        author: "Max2526362",
        position: 17,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Unknown",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Gogolik22", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Tonyeye", percent: 100, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 18,
        name: "Ostrov Alpha",
        author: "gogolik22",
        position: 18,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "Free To Copy",
        verifier: "Extreme",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://youtube.com/watch?v=link" },
            { user: "Tonyeye", percent: 100, link: "https://youtube.com/watch?v=link" }
        ]
    },
    {
        id: 19,
        name: "OCTPOB",
        author: "Unizart",
        position: 19,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "Extreme",
        records: []
    },
    {
        id: 20,
        name: "Deadworld",
        author: "Max2526462",
        position: 20,
        difficulty: "Extreme Demon",
        progress: 0,
        status: "unverified",
        videoLink: "",
        type: "normal",
        percentToQualify: 35,
        password: "free to copy",
        verifier: "",
        records: []
    },
    {
        id: 21,
        name: "dreams",
        author: "zoink",
        position: 21,
        difficulty: "Extreme Demon",
        progress: 100,
        status: "verified",
        videoLink: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        type: "platformer",
        percentToQualify: 100,
        password: "free to copy",
        verifier: "zoink",
        records: [
            { user: "DudeArctik", time: "1:17.295", link: "https://youtube.com/watch?v=link" }
        ]
    }
];
// Инициализация Vue приложения
const app = Vue.createApp({
    data() {
        return {
            demons: demonsData,
            selectedDemon: null,
            searchQuery: '',
            sortBy: 'position'
        }
    },
    computed: {
        // Фильтрация и сортировка демонов
        processedDemons() {
            let demons = [...this.demons];
            
            // 1. СНАЧАЛА ВСЕГДА сортируем по позиции
            demons.sort((a, b) => a.position - b.position);
            
            // 2. ПОТОМ поиск (если есть)
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                demons = demons.filter(demon => 
                    demon.name.toLowerCase().includes(query) ||
                    demon.author.toLowerCase().includes(query)
                );
            }
            
            // 3. ДОПОЛНИТЕЛЬНАЯ сортировка если НЕ position
            if (this.sortBy === 'name') {
                demons.sort((a, b) => a.name.localeCompare(b.name));
            } else if (this.sortBy === 'difficulty') {
                demons.sort((a, b) => a.percentToQualify - b.percentToQualify);
            }
            
            return demons;
        },
        
        // Статистика
        stats() {
            return {
                total: this.demons.length,
                verified: this.demons.filter(d => d.status === 'Verified').length,
                inVerification: this.demons.filter(d => d.status === 'In verification').length,
                platformers: this.demons.filter(d => d.levelType === 'Platformer').length
            };
        }
    },
    
    methods: {
        // Выбор демона для просмотра деталей
        selectDemon(demon) {
            this.selectedDemon = demon;
        },
        
        // Закрытие модального окна
        closeModal() {
            this.selectedDemon = null;
        },
        
        // Получение статуса верификации
        getStatusClass(demon) {
            if (demon.status === 'Verified') return 'status-verified';
            if (demon.status === 'In verification') return 'status-pending';
            return 'status-unverified';
        },
        
        // Текст статуса
        getStatusText(demon) {
            return demon.status;
        },
        
        // Расчет прогресса для отображения
        getDemonProgress(demon) {
            if (demon.records && demon.records.length > 0) {
                const bestRecord = Math.max(...demon.records.map(r => r.percent || 0));
                return `${bestRecord}% — 100%`;
            }
            return `0% — 100%`;
        },
        
        // Расчет очков для демон-листа
        calculateScore(demon, percent) {
            // Простая формула для демо
            const baseScore = 1000 - (demon.position * 45);
            return (baseScore * ((percent || demon.percentToQualify) / 100)).toFixed(2);
        },
        
        // Отображение рекорда (проценты или время)
        getRecordDisplay(record, levelType) {
            if (levelType === 'Platformer' && record.time) {
                return record.time;
            }
            return `${record.percent}%`;
        },
        
        // Проверка есть ли верификация
        hasVerification(demon) {
            return demon.verification && demon.verification !== '' && demon.verification !== 'No data';
        }
    },
    
    mounted() {
        console.log('Sanich GDPS Demon List loaded successfully!');
        console.log(`Loaded ${this.demons.length} verified demons`);
        console.log('Created by DudeArctik - GDPS Owner');
    }
});

// Монтируем приложение
app.mount('#app');

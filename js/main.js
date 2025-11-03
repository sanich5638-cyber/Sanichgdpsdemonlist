// Данные демонов - 20 верифицированных уровней
const demonsData = [
    {
        id: 113,
        name: "Pulsar",
        author: "Gdsher228",
        creators: ["Gdsher228"],
        position: 1,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "Gdsher228",
        status: "Verified",
        percentToQualify: 35,
        password: "Free To Copy",
        records: [
            { user: "Skrejj009", percent: 65, link: "https://www.youtube.com/watch?v=link_to_players_video_1" }
        ]
    },
    {
        id: 101,
        name: "Fire hell",
        author: "DudeArctik",
        creators: ["DudeArctik", "Skrejj009r"],
        position: 2,
        verification: "https://youtube.com/GaJk0QLlPSA?si=huqJAIEjCYXpwk5p",
        verifier: "Skrejj009r",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: [
            { user: "DudeArctik", percent: 46, link: "https://www.youtube.com/watch?v=link_to_players_video_1" }
        ]
    },
    {
        id: 176,
        name: "Love is",
        author: "nocssnew",
        creators: ["nocssnew"],
        position: 3,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "nocssnew's friend",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: [
            { user: "nocssnew's friend", percent: 100, link: "https://www.youtube.com/watch?v=link_to_friend_victory" },
            { user: "Nagasaki", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Nagasaki_victory", comment: "возможно читер" },
            { user: "Tonyeye", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Tonyeye_victory" },
            { user: "DudeArctik", percent: 2, link: "https://www.youtube.com/watch?v=link_to_DudeArctik_attempt" }
        ]
    },
    {
        id: 154,
        name: "HeartBeat",
        author: "Nagasaki",
        creators: ["Nagasaki"],
        position: 4,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "Zoink",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Nagasaki_victory" },
            { user: "Tonyeye", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Tonyeye_victory" }
        ]
    },
    {
        id: 117,
        name: "Silent",
        author: "Extreme",
        creators: ["Extreme"],
        position: 5,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "Extreme",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: [
            { user: "Extreme", percent: 100, link: "https://www.youtube.com/watch?v=MgJeijBGKHU" },
            { user: "Skrejj009", percent: 99, link: "https://www.youtube.com/watch?v=MgJeijBGKHU" }
        ]
    },
    {
        id: 158,
        name: "every start",
        author: "Max2526462",
        creators: ["Max2526462"],
        position: 6,
        verification: "",
        verifier: "Community",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Nagasaki_victory" },
            { user: "Tonyeye", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Tonyeye_victory" },
            { user: "DudeArctik", percent: 100, link: "https://www.youtube.com/watch?v=link_to_DudeArctik_victory" }
        ]
    },
    {
        id: 170,
        name: "Hard demon",
        author: "a11vaw",
        creators: ["a11vaw"],
        position: 7,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "a11vaw",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: []
    },
    {
        id: 164,
        name: "Sweet dream",
        author: "Nagasaki",
        creators: ["Nagasaki"],
        position: 8,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "Nagasaki",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: []
    },
    {
        id: 140,
        name: "Creo Sphere",
        author: "Nagasaki",
        creators: ["Nagasaki"],
        position: 9,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "Nagasaki",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: [
            { user: "Tonyeye", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Tonyeye_victory" },
            { user: "Nagasaki", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Nagasaki_victory" }
        ]
    },
    {
        id: 171,
        name: "kocmoc",
        author: "The4lovek",
        creators: ["The4lovek"],
        position: 10,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "Tonyeye",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: [
            { user: "Extreme", percent: 3, link: "https://www.youtube.com/watch?v=link_to_Extreme_attempt", comment: "Был занят, даже не пытался" },
            { user: "Nagasaki", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Nagasaki_victory" },
            { user: "Tonyeye", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Tonyeye_victory" }
        ]
    },
    {
        id: 195,
        name: "When you find m3",
        author: "Tonyeye",
        creators: ["Tonyeye"],
        position: 11,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "Tonyeye",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: [
            { user: "DudeArctik", percent: 100, link: "https://www.youtube.com/watch?v=link_to_DudeArctik_victory" }
        ]
    },
    {
        id: 198,
        name: "headache",
        author: "Gogolik22",
        creators: ["Gogolik22"],
        position: 12,
        verification: "",
        verifier: "Gogolik22",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: []
    },
    {
        id: 154,
        name: "fallen angel",
        author: "Nagasaki",
        creators: ["Nagasaki"],
        position: 13,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "zoink",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Nagasaki_victory" },
            { user: "Tonyeye", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Tonyeye_victory" }
        ]
    },
    {
        id: 196,
        name: "You love again",
        author: "Gogolik22",
        creators: ["Nocssnew"],
        position: 14,
        verification: "https://vm.tiktok.com/ZMHcfxyRjc8Y2-PJ5xh/",
        verifier: "Gogolik22",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: []
    },
    {
        id: 133,
        name: "Blaster temple",
        author: "Max2526462",
        creators: ["Max2526462"],
        position: 15,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "Extreme",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: [
            { user: "Gogolik22", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Gogolik22_victory" },
            { user: "Tonyeye", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Tonyeye_victory" },
            { user: "Nagasaki", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Nagasaki_victory" },
            { user: "Max2526462", percent: 7, link: "https://www.youtube.com/watch?v=link_to_Max2526462_attempt" },
            { user: "DudeArctik", percent: 7, link: "https://www.youtube.com/watch?v=link_to_DudeArctik_attempt" }
        ]
    },
    {
        id: 134,
        name: "Purgatori",
        author: "Max2526362",
        creators: ["Max2526362"],
        position: 16,
        verification: "",
        verifier: "Community",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Nagasaki_victory" },
            { user: "Gogolik22", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Gogolik22_victory" },
            { user: "Tonyeye", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Tonyeye_victory" }
        ]
    },
    {
        id: 115,
        name: "Ostrov Alpha",
        author: "gogolik22",
        creators: ["gogolik22"],
        position: 17,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "Extreme",
        status: "Verified",
        percentToQualify: 35,
        password: "Free To Copy",
        records: [
            { user: "Nagasaki", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Nagasaki_victory" },
            { user: "Tonyeye", percent: 100, link: "https://www.youtube.com/watch?v=link_to_Tonyeye_victory" }
        ]
    },
    {
        id: 138,
        name: "OCTPOB",
        author: "Unizart",
        creators: ["Unizart"],
        position: 18,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "Extreme",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: []
    },
    {
        id: 197,
        name: "Deadworld",
        author: "Max2526462",
        creators: ["Max2526462"],
        position: 19,
        verification: "",
        verifier: "Community",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: []
    },
    {
        id: 157,
        name: "dreams",
        author: "zoink",
        creators: ["zoink"],
        position: 20,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "zoink",
        status: "Verified",
        percentToQualify: 100,
        password: "free to copy",
        levelType: "Platformer",
        records: [
            { user: "DudeArctik", time: "1:17.295", link: "https://www.youtube.com/watch?v=link_to_DudeArctik_run" }
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

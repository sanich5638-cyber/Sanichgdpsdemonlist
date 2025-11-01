// Данные демонов в формате GD Demon List
const demonsData = [
    {
        id: 185,
        name: "Road to hell",
        author: "DudeArctik",
        creators: ["DudeArctik"],
        position: 1,
        verification: "",
        verifier: "",
        status: "In verification",
        percentToQualify: 1,
        password: "free to copy",
        records: [
            { user: "DudeArctik", percent: 1.88, link: "https://www.youtube.com/watch?v=link_to_DudeArctik_attempt" },
            { user: "Extreme", percent: 1.11, link: "https://www.youtube.com/watch?v=link_to_Extreme_attempt" }
        ]
    },
    {
        id: 116,
        name: "Silent Yatagista",
        author: "DudeArctik",
        creators: ["DudeArctik", "Extreme", "Skrejj009"],
        position: 2,
        verification: "",
        verifier: "",
        status: "In verification",
        percentToQualify: 10,
        password: "Not Copyable",
        records: [
            { user: "Silent", percent: 11, link: "https://www.youtube.com/watch?v=MgJeijBGKHU" },
            { user: "Skrejj009r", percent: 19, link: "https://www.youtube.com/watch?v=MgJeijBGKHU" }
        ]
    },
    {
        id: 113,
        name: "Pulsar",
        author: "Gdsher228",
        creators: ["Gdsher228"],
        position: 3,
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
        position: 4,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
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
        position: 5,
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
        position: 6,
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
        id: 164,
        name: "Sweet dream",
        author: "Nagasaki",
        creators: ["Nagasaki"],
        position: 7,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "Nagasaki",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: []
    },
    {
        id: 158,
        name: "every start",
        author: "Max2526462",
        creators: ["Max2526462"],
        position: 8,
        verification: "No data",
        verifier: "Unknown",
        status: "Unverified",
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
        position: 9,
        verification: "https://www.youtube.com/watch?v=ISTl28wKSXc",
        verifier: "a11vaw",
        status: "Verified",
        percentToQualify: 35,
        password: "free to copy",
        records: []
    },
    {
        id: 117,
        name: "Silent",
        author: "Extreme",
        creators: ["Extreme"],
        position: 10,
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
        id: 140,
        name: "Creo Sphere",
        author: "Nagasaki",
        creators: ["Nagasaki"],
        position: 11,
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
        position: 12,
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
        position: 13,
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
        id: 154,
        name: "fallen angel",
        author: "Nagasaki",
        creators: ["Nagasaki"],
        position: 14,
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
        position: 15,
        verification: "",
        verifier: "",
        status: "Unverified",
        percentToQualify: 35,
        password: "free to copy",
        records: []
    },
    {
        id: 133,
        name: "Blaster temple",
        author: "Max2526462",
        creators: ["Max2526462"],
        position: 16,
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
        position: 17,
        verification: "",
        verifier: "Unknown",
        status: "Unverified",
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
        position: 18,
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
        position: 19,
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
        position: 20,
        verification: "",
        verifier: "",
        status: "Unverified",
        percentToQualify: 35,
        password: "free to copy",
        records: []
    },
    {
        id: 157,
        name: "dreams",
        author: "zoink",
        creators: ["zoink"],
        position: 21,
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
    
    },  // ← это закрывает data()
    
computed: {
  processedDemons() {
    let demons = [...this.demons];
    
    // 1. Сначала сортируем по позиции
    demons.sort((a, b) => a.position - b.position);
    
    // 2. Потом поиск (если есть)
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      demons = demons.filter(demon =>
        demon.name.toLowerCase().includes(query) ||
        demon.author.toLowerCase().includes(query)
      );
    }
    
    // 3. Дополнительная сортировка если НЕ position
    if (this.sortBy === 'name') {
      demons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortBy === 'difficulty') {
      demons.sort((a, b) => a.percentToQualify - b.percentToQualify);
    }
    
    return demons;
  },
  
  stats() {
    return {
      total: this.demons.length,
      verified: this.demons.filter(d => d.verifier && d.verification).length,
      inVerification: this.demons.filter(d => d.status && d.status.includes('verification')).length,
      platformers: this.demons.filter(d => d.levelType === 'Platformer').length
    };
  }
},  // ← это закрывает computed

// УБРАТЬ лишнее:
// },
//
// // Статистика
// stats() {
//     return {
//         total: this.demons.length,
  },
  
  stats() {
    return {
      total: this.demons.length,
      verified: this.demons.filter(d => d.verifier && d.verification).length,
      inVerification: this.demons.filter(d => d.status && d.status.includes('verification')).length,
      platformers: this.demons.filter(d => d.levelType === 'Platformer').length
    };
  }
},
    },

    // Статистика
    stats() {
        return {
            total: this.demons.length,
            verified: this.demons.filter(d => d.verifier && d.verification).length,
            inVerification: this.demons.filter(d => d.status && d.status.includes('verification')).length,
            platformers: this.demons.filter(d => d.levelType === 'Platformer').length
        };
    }
},
        },
        
        // Статистика
        stats() {
            return {
                total: this.demons.length,
                verified: this.demons.filter(d => d.verifier && d.verification).length,
                inVerification: this.demons.filter(d => d.status && d.status.includes('verification')).length,
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
            if (demon.verifier && demon.verification) return 'status-verified';
            if (demon.status && demon.status.includes('verification')) return 'status-pending';
            return 'status-unverified';
        },
        
        // Текст статуса
        getStatusText(demon) {
            if (demon.verifier && demon.verification) return 'Verified';
            if (demon.status && demon.status.includes('verification')) return 'In Verification';
            return 'Unverified';
        },
        
        // Расчет прогресса для отображения
        getDemonProgress(demon) {
            if (demon.records && demon.records.length > 0) {
                const bestRecord = Math.max(...demon.records.map(r => r.percent));
                return `${bestRecord}% — 100%`;
            }
            return `0% — 100%`;
        },
        
        // Расчет очков для демон-листа
        calculateScore(demon, percent) {
            // Простая формула для демо
            const baseScore = 1000 - (demon.position * 45);
            return (baseScore * (percent / 100)).toFixed(2);
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
            return demon.verification && demon.verification !== 'No data';
        }
    },
    
    mounted() {
        console.log('GD Demon List loaded successfully!');
        console.log(`Loaded ${this.demons.length} demons`);
        console.log('Stats:', this.stats);
    }
});

// Монтируем приложение
app.mount('#app');

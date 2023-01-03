import {reactive} from 'vue'
export const store = reactive ({
    clockData:[
        {
            day: 'Lun: ',
            clockTime: '15:00–19:30'
        },
        {
            day: 'Mar: ',
            clockTime: '15:00–19:30'
        },
        {
            day: 'Mer: ',
            clockTime: 'Chiuso'
        },
        {
            day: 'Gio: ',
            clockTime: 'Chiuso'
        },
        {
            day: 'Ven: ',
            clockTime: 'Chiuso'
        },
        {
            day: 'Sab: ',
            clockTime: '08:30–13:00, 15:00–19:30'
        },
        {
            day: 'Dom: ',
            clockTime: '08:30–13:00, 15:00–19:30'
        },
    ]
});
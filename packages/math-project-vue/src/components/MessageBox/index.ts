import {createApp} from 'vue'
import MessageBox  from './MessageBox.vue'

export interface MessageBoxProps{
    title?:string
    content:string
    closeable?:boolean
    showCancle?:boolean
    showConfirm?:boolean
    showIcon?:boolean
}

interface MessageBoxOptions extends MessageBoxProps {
    onCancel?:Function
    onConfirm?:Function
}

export function showMsg(options: MessageBoxOptions){
    const div = document.createElement('div')
    document.body.appendChild(div)

    const app = createApp(MessageBox, {
        ...options,
        onCancel:() => {
            options.onCancel ? options.onCancel() : null
            app.unmount()
            div.remove()
        },
        onConfirm:()=>{
            options.onConfirm ? options.onConfirm() : null
            app.unmount()
            div.remove()
        },
    })
    app.mount(div)
}
import { TipoNotificacao } from "@/interfaces/INotificacao"
import { NOTIFICAR } from "@/store/tipo-mutacoes"
import { store } from '@/store'

export const notificacaoMixin = {
    methods: {
        notificar(tipo: TipoNotificacao, titulo: string, texto: string) : void {
            store.commit(NOTIFICAR, {
                titulo,
                texto,
                tipo
            })
        }
    }
}
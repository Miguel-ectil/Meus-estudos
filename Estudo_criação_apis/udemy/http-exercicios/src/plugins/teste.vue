<template>
    <div>
        <div class="card mt3">
            <div class="card-header">
                <h1 class="label h5 m-0">
                <strong>Miguel</strong>
                </h1>
            </div>
            <div class="card-body p-0">
                <b-table :items="tabela"
                         :fields="fields">
                        
                </b-table>
                <div class="row justify-content-center">
                <b-table>  
                    <template #cell(adicionar)="data">
                    <button id="tooltip-target-3"
                            class="btn btn-sm btn-secondary"
                            @click="editarLote(data.item)">
                        <b-icon-pencil-fill />
                    </button>
                    <b-tooltip target="tooltip-target-3" 
                                triggers="hover">
                        Editar caixa de saída
                    </b-tooltip>
                    </template>
                </b-table> 
                <b-button-toolbar key-nav
                                    aria-label="Toolbar with button groups">
                    <b-button-group class="mx-1">
                        <b-button v-show="paginaAtual + 1 !== paginas + 1 " 
                                @click="proximaPagina">
                        Próxima
                        </b-button>
                        <b-button @click="goToUltima">
                        Última
                        </b-button>
                    </b-button-group>
                </b-button-toolbar>    
                </div>    
            </div> 
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'teste',
        data () {
            return {
                tabela: [],
                fields: [{
                    key: 'nome1',
                    sortable: true,
                    label: 'Status'
                    },
                    {
                        key: 'nome2',
                        sortable: true,
                        label: 'Serial'
                    },
                    {
                        key: 'nome3',
                        sortable: true,
                        label: 'ID.Est'
                    },
                        {
                        key: 'nome4',
                        sortable: true,
                        label: 'CNPJ'
                    },
                        {
                        key: 'nome6',
                        sortable: true,
                        label: 'Nome'
                    },
                ]
            }
        }
    }
</script>

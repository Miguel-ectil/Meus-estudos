<template>
    <div>
        <NavbarHome2 />
        <div class="container col-sm-8 mt-5
         front-container1" >
            <div  class="row chat-top " style="background-color: #ededed;">
                <div class="col-sm-4 border-right border-secondary">
                    <p>Meu perfil</p>
                    <!-- <img src="{% static 'assets/dp.png' %}" alt="" class="profile-image rounded-circle"> -->
                    <span class="ml-2"></span>
                </div>
                <div class="col-sm-8">
                    <p>perfi do contato</p>
                    <!-- <img src="{% static 'assets/dp.png' %}" alt="" class="profile-image rounded-circle"> -->
                    <span class="ml-2"></span>
                </div>
            </div>
            <div class="row">   
                <div style="background-color: #d9dbd5;" class="col-sm-4 contacts">
                    <div class="contact-table-scroll">
                        <table class="table table-hover">
                            <tbody> 
                                <p>aqui vai os contatos</p>
                                <tr>
                                </tr>
                                <!-- end -->
                            </tbody>
                        </table>
                    </div>
                </div> 
                <div style="background-color: #e4e1de;" class="col-sm-8 message-area">
                    <div class="message-table-scroll">
                        <table class="table">
                            <tbody id='chat-body'>
                                <tr>
                                    <td>
                                        <p class="bg-info p-2 mt-5 mr-6 shadow-sm text-white float-right rounded">KLK, soy yo Miguel
                                        <small class="p-1 shadow-sm"></small>
                                        </p>
                                    </td>
                                <tr>
                                    <td>
                                        <p class="bg-primary p-2 mt-5 mr-6 shadow-sm text-white float-left rounded">KLK Miguel, como estas?
                                        <small class="p-1 shadow-sm"></small>
                                        </p>
                                    </td>
                                </tr>        
                            </tbody>
                        </table>
                    </div>
                    <div class="row message-box p-3">
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="message_input" placeholder="Enviar uma mensage...">
                        </div>
                        <div class="col-sm-0 mt-6">
                            <div class="control">
                                <b-button pill style="background-color: #7c3131;">Enviar</b-button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>      
        </div>
    </div>    
</template>
<script>
import NavbarHome2 from '@/components/NavbarHome2.vue'


export default {
    name: "Conversa",
    components: {
        NavbarHome2
    }
} 
</script>

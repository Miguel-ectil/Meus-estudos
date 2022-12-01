import { styled } from "../../../styles"

export const CadastrarAeContainer = styled('main',{

    padding: '0 100px',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 656,
    

    h1: {
        fontSize: 24,
        backgroundColor: '#e9ecef',
        borderRadius: 4,
        padding: '10px 15px',
    },

    '.text-dark': {
        color: '#343a40',
    },

    '.bg-light' : {
        backgroundColor: '#f8f9fa',
    },

    '.w-100':{
        width: '100%',
    },

    '.card': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        wordWrap: 'break-word',
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '0.25rem',
    },

    '.card_header:first-child':{
        borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
    },

    '.card_header': {
        padding: '0.75rem 1.25rem',
        marginBottom: 0,
        borderBottom: '1px solid rgba(0,0,0,.125)',
        backgroundColor: 'rgba(0,0,0,.03)',
    },

    '.col-sm-8':{
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%',
    },

    '.two_cards': {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },

    'button, select': {
        textTransform: 'none',
    },

    'button, input': {
        overflow: 'visible',
    },

    div:{
        display: 'block',
    },

    button: {
        backgroundColor: '#007bff',
        border: 0,
        color: 'white',
        borderRadius: 4,
        padding: '8px 16px',
        cursor: 'pointer',
        overflow: 'visible',

        '&:hover': {
            backgroundColor: '#0069d9',
        }
    },

    

    '.btn-dark': {
        backgroundColor: '#343a40',

        '&:hover': {
            backgroundColor: '#212529',
        }
    },

    '.card_body': {
        // border: '1px solid gray',
        flex: '1 1 auto',
        minHeight: '1px',
        padding: '1.25rem',
        
    },   

    '.col': {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%',
    },

    '.col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-auto, .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-auto, .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-auto, .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-auto':{

        position: 'relative',
        width: '100%',
        paddingRight: '0.75rem',
        paddingLeft: '0.75rem',
    },

    '.badge': {
        display: 'inline-block',
        padding: '0.25rem 0.4rem',
        fontSize: '75%',
        fontWeight: 700,
        lineHeight: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'baseline',
        borderRadius: '0.25rem',
    },

    '.badge-danger': {
        backgroundColor: '#dc3545',
        color: 'white',
    },

    '.badge-success':{
        backgroundColor: '#28a745',
        color: 'white',	
    },

    '.input-group': {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        width: '100%',
    },

    '*, :after, :before': {
        boxSizing: 'border-box',
    },

    '.input-group-append': {
        marginLeft: '-1px',
    },

    '.input-group-append .btn, .input-group-prepend .btn':{
        position: 'relative',
        zIndex: 2,  
    },

    '.input-group-append, .input-group-prepend': {
        display: 'flex',
    },

    '.input-group>.input-group-append>.btn, .input-group>.input-group-append>.input-group-text, .input-group>.input-group-prepend:first-child>.btn:not(:first-child), .input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child), .input-group>.input-group-prepend:not(:first-child)>.btn, .input-group>.input-group-prepend:not(:first-child)>.input-group-text': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },

    '.input-group>.custom-file, .input-group>.custom-select, .input-group>.form-control, .input-group>.form-control-plaintext':{
        position: 'relative',
        flex: '1 1 auto',
        width: '1%',
        minWidth: 0,
        marginBottom: 0
    },

    '.bi-search' : {
        fontSize: '125%',
        verticalAlign: 'text-bottom',
        width: '1rem',
        height: '1rem',
        fill: 'currentColor',
        
    },

    '.form-control-sm':{
        height: 'calc(1.5em + 0.5rem + 2px)' ,
        padding: '0.25rem 0.5rem',
        fontSize: '0.875rem',
        lineHeight: 1.5,
        borderRadius: '0.2rem',
    },

    '.form-control': {
        display: 'block',
        width: '100%',
        fontWeight: 400,	
        color: '#495057',
        backgroundColor: '#fff',
        backgroundClip: 'padding-box',
        border: '1px solid #ced4da',
        
    },
    '.form-control:disabled, .form-control[readonly]':{
        backgroundColor: '#e9ecef',
        opacity: 1,
    },

    '.custom-control': {
        position: 'relative',
        zIndex: 1,
        display: 'block',
        minHeight: '1.5rem',
        paddingLeft: '1.5rem',
    },

    'input[type=checkbox]':{
        padding: 0,
    },

    'input[type=checkbox], input[type=radio]':{
        boxSizing: 'border-box',
        padding: 0,
    },

    '.custom-control-input': {
        position: 'absolute',
        left: 0,
        zIndex: -1,
        width: '1rem',
        height: '1.25rem',
        opacity: 1,
    },

    '.custom-control-label': {
        position: 'relative',
        marginBottom: 0,
        verticalAlign: 'top',
    },

    label: {
        display: 'inline-block',
    },

    '.label, .label-title': {
        fontSize: '13px',

        display: 'inline-block',
        fontWeight: 700,
        color: '#303030',
        margin: 0,
        marginTop: ' 5px',
    },
    '.input_group>.form_control': {
        position: 'relative',
        flex: '1 1 auto',
        width: '1%',
        minWidth: 0,
        margin: 0,
    },

    

     '.placa-moto-texto': {
        marginTop:'80px',
        userSelect: 'none',
        color: '#000',
    },

    '.placa-moto': {
        backgroundImage: 'url(../.././placa-moto.png)',
        backgroundRepeat: 'no-repeat',
        height:'274px',
        width: '282px',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '85px',
        fontFamily: "Mercosul",
        lineHeight: '70px',
    },

    '.Placa-carro-texto': {
        marginTop:'190px',
        display: 'flex',
        alignItems: 'flex-end',
        userSelect: 'none',
        color: '#000',
    },

    '.Placa_carro': {
        backgroundImage: 'url(../.././placa_carro.png)',
        backgroundRepeat: 'no-repeat',
        height:'174px',
        width: '500px',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '110px',
        fontFamily: "Mercosul",
    },

    '.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .bv-example-row': {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
    },

    '.bv-example-row':{
        maxWidth: '1140px',
    },

    '.container, .container-fluid, .container-lg, .container-md, .container-sm, .bv-example-row, .container-xl':{

        width: '100%',
    },

    '.container, .container-lg, .container-md, .container-sm, .container-xl':{
        maxWidth: '450px',
    },

    '.justify-content-md-center': {
        justifyContent: 'center',
    },

    '.justify-content-center':{
        justifyContent: 'center',
    },

    '.d-flex':{
        display: 'flex',
    },

    '.col-12': {
        flex: '0 0 100%',
        maxWidth: '100%',
    },
    
    '.mt-3, .my-3' : {
        marginTop: '1rem',
    },

    '.row': {
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: '-0.75rem',
        marginLeft: '-0.75rem',
    },
    

    '.col-lg-3': {
        flex: '0 0 25%',
        maxWidth: '25%',    
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    '.mb-1': {
        marginBottom: '0.25rem',
    },
    '.mb-0, my-0':{
        marginBottom: 0,

    },

    '.custom-select': {
        display: 'inline-block',
        width: '100%',
        height: 'calc(1.5em + 0.75rem + 2px)',
        padding: '0.375rem 1.75rem 0.375rem 0.75rem',
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#495057',
        verticalAlign: 'middle',
        backgroundColor: '#fff',
        border: '1px solid #ced4da',
        borderRadius: '0.25rem',
        appearance: 'none',
    },

    '.btn:not(:disabled):not(.disabled)':{
        cursor: 'pointer',
    },

    '.btn, btn-sm':{
        padding: '0.25rem 0.5rem',
        fontSize: '0.875rem',
        lineHeight: 1.5,
        borderRadius: '0.2rem',
    },

    '.btn-primary': {
        color: '#fff',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
    },

    '.btn-block':{
        display: 'block',
        width: '100%',
    },

    '.btn': {
        display: 'inline-block',
        fontWeight: 400,
        textAlign: 'center',
        verticalAlign: 'middle',
        userSelect: 'none',
    },

    '[type=button], [type=reset], [type=submit], button': {
        WebKitAppearance: 'button',
        
    },

    '.btn-danger': {
        backgroundColor: '#dc3545',

        '&:hover': {
            backgroundColor: '#c82333',
        }
    },

})

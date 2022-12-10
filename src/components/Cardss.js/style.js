import { makeStyles } from "@material-ui/core";
const styles = makeStyles({
    container:{
        padding:"0 5%",
        width:"100%",
        height:"100%",
        margin:0,
    },
    infoCard:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'10%',
     },
     card:{
         display:'flex',
         flexDirection:'column',
         justifyContent:'space-between',
         alignItems:'center',
         width:'100%',
         height:'45vh',
         padding:'10%',
         borderRadius:10,
         color:'white',
     }
})
export default styles;
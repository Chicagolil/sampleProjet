import styles from "./Footer.module.scss"

function Footer(){
    return (
    <footer className= {`${styles.footer} d-flex flex-row alling-items-center justify-content-center p-20`} >
       <p>Copyright @ 2024 Cookchef Platforms, Inc.</p> 
    </footer>
    );
}



export default  Footer ;
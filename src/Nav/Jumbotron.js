import React from 'react'
import styles from  './Jumbotron.css'

const jumbotron = (props) => {
    let classes = ['display-4'];

    if(props.gamesCount <= 2){
        classes.push('red');
    }
    if(props.gamesCount <= 1){
        classes.push('bold');
    }


    return (
        <div className="jumbotron">
            <h1 className={classes.join(' ')}>Olá, mundo!</h1>
            <p className="lead">Este é um simples componente jumbotron para chamar mais atenção a um determinado conteúdo ou informação.</p>
            <hr className="my-4" />
            <p className={styles.red}>Olá! Um texto de teste</p>
            <p>Ele usa classes utilitárias para tipografia e espaçamento de conteúdo, dentro do maior container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Leia mais</a>
        </div>
    )
}

export default jumbotron
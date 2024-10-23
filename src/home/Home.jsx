import style from "./home.module.css"

function Home() {
    return (
        <div className={style.home}>
            <h1 className={style.header}>Welcome To the Shop!</h1>
            <p>Here you you can add anything you wish to cart(you cant checkout).
                Every item sold here is of superior quality. Lorem ipsum dolor sit amet consectetur, adipisicing elit. At magni quae esse debitis quis, rem illo ipsum pariatur perspiciatis fugiat. Rem, animi. Repudiandae laborum ab tempora est iste, obcaecati hic.

            </p>
        </div>
    );
}

export default Home;
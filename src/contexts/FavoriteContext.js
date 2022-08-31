import React from "react";

import "./styles.css";
import BookList from "./components/BookList";
import BookFavorite from "./components/BookFavorite";
import ButtonComponent from "./components/ButtonComponent";
import FormInput from "./components/FormInput";

class App extends React.Component {
    state = {
        books: [
            {
                id: 1,
                name: "Rahvayana",
                image: require("./assets/rahvayana.jpg"),
                description:
                    "Yang menulis di buku ini belum tentu saya, sebab Rahwana tak mati-mati. Gunung kembar Sondara-Sondari yang mengimpit Rahwana cuma mematikan tubuhnya semata. Jiwa Rahwana terus hidup. Hidupnya menjadi gelembung-gelembung alias jisim. Siapa pun bisa dihinggapi gelembung itu, tak terkecuali saya.   Yang menulis di buku ini barangkali gelembung-gelembung itu, jisim…",
                author: "Sujiwo Tejo"
            },
            {
                id: 2,
                name: "Tuhan Maha Asyik",
                image: require("./assets/tuhan.jpg"),
                description:
                    "Melalui kisah-kisah yang dikemas dalam dialog polos ala dunia bocah, Sujiwo Tejo dan Buya MN. Kamba coba mengajak kita ”bermain-main” untuk memperkenalkan ke-Maha Asyik-an Tuhan. Tuhan sangat asyik ketika Dia tidak kita kurung paksa dalam penamaan-penamaan dan pemaknaan-pemaknaan. Dia tak terdefinisikan. Dia tak terkmaknakan. Dia ada sebelum definisi dan makna…",
                author: "Sujiwo Tejo"
            },
            {
                id: 3,
                name: "Sabdo Cinta Angon Kasih",
                image: require("./assets/sabdo.jpg"),
                description:
                    "Mbok Jamu berselendang ungu itu menjadi sumber kebahagiaan bagi orang-orang yang datang dan pergi membeli dagangannya. Bukan karena rambut hitam kehijauannya, lereng keningnya yang bening, atau kecantikannya yang tiada tara. Para pria menjadi platinum member jamunya karena Mbok Jamu pintar memosisikan diri sebagai konco wingking. Perempuan yang posisinya selangkah di…",
                author: "Sujiwo Tejo"
            },
            {
                id: 4,
                name: "Talijiwo",
                image: require("./assets/talijiwo.jpg"),
                description:
                    "Sudah berapa lama kau terjebak dengan beragam kesibukan yang tak habis-habis itu? Berhentilah berbusa-busa tentang kemerdekaan bila ternyata kau sendiri tak punya waktu luang. Padahal, hanya di dalam waktu luang manusia bisa berpikir dan merenung tentang bagaimana seyogianya mengisi kemerdekaan hidup. Maka, waktu luang itu jangan dimampatkan lagi dengan melulu…",
                author: "Sujiwo Tejo"
            }
        ],
        booksfav: [],
        isloading: false
    };

    addToFavorite = id => {
        const data = this.state.books.find(item => item.id === id);
        this.setState({
            booksfav: [...this.state.booksfav, data]
        });
    };

    deleteToFavorite = id => {
        const hapus = this.state.booksfav.filter(item => item.id !== id);
        this.setState({ booksfav: hapus });
    };

    addNewBook = data => {
        this.setState({
            books: [data, ...this.state.books]
        });
    };

    render() {
        return (
            <div className="container">
                <h1 className="center">Exercise : Add Favorite Books</h1>
                <FormInput />
                <div className="wrap">
                    <div className="container-left">
                        <BookList books={this.state.books} add={this.addToFavorite} />
                        <hr />
                    </div>
                    <div className="container-right">
                        <BookFavorite
                            booksfav={this.state.booksfav}
                            delete={this.deleteToFavorite}
                        />
                    </div>
                    <div>
                        <ButtonComponent load={this.state.isloading} />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;

import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';
import './App.css'
import {googleAPIKey} from './Keys'
import VideoPlayer from './components/Videos/Videos';
import RelatedVideos from './components/RelatedVideos/RelatedVideos';
import Comment from './components/Comment/Comment';
import {Container, Row, Col} from 'react-bootstrap';
import './'





class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            videoId: ''
        };
    }

    componentDidMount() {
        this.getVideo();
      
    
    }

    getVideo = async (searchTerm) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=' + searchTerm +'&key=' + googleAPIKey + '&part=snippet')
        console.log(response.data)
        this.setState({
            videoId: response.data.items[0].id.videoId
        });
        this.getRelatedVideo(response.data.items[0].id.videoId);
    }

    getRelatedVideo = async (video) => {
        
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideo='+ video + '&key=' + googleAPIKey + '&part=snippet&maxRelatedVideos=3')
        console.log(response.data)
        this.setState({
            searchResults: response.data.items
        });
    }

    changeVideo = (newVideoId) => {
        this.setState({
            videoId: newVideoId
        })
    }

    getRelatedVideo = async () => {
        let response = await axios.get('www.googleapis.com/youtube/v3/search?relatedToVideoId=' +  +' &type=video&key= ' + googleAPIKey + '&part=snippet')
        console.log(response.data)
        this.setState({
            searchResults: response.data.item,
            videoId: response.data.items[0].id.videoId
        });
    }
    



    
    // addComment = async (comment) => {
    //     let response = await axios.post('http://127.0.0.1:8000/comment/', comment);
        
    // }

    // addReply = async (reply) => {
    //     let response = await axios.post('http://127.0.0.1:8000/reply/', reply);
        
    // }
    

    render() {
        return (
            <div>
                <h1>YouTube React Project</h1>
                <SearchBar getAVideo={this.getVideo}/>
<<<<<<< HEAD
                <Container>
                    <Row>
                        <Col sm={6}>
                            <VideoPlayer playVideo={this.state.videoId} />
                            <RelatedVideos />
                        </Col>
                        <Col sm={6}>
                            <h4>Comment Here</h4>
                             <Comment createComment={this.addComment}/>
                        </Col>
                    </Row>
                </Container>
               
                
=======
                <VideoPlayer playVideo={this.state.videoId} />
                <RelatedVideos playRelatedVideo={this.state.searchResults} changeVideo={this.changeVideo} />
                <h4>Comment Here</h4>
                <Comment createComment={this.addComment}/>
>>>>>>> db410b5aab00c630e13129a76857125aee34abba
            </div>
        )
    }
}



export default App;
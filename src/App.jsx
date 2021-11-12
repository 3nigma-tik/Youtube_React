import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';
import './App.css'
import {googleAPIKey} from './Keys'
import VideoPlayer from './components/Videos/Videos';
import RelatedVideos from './components/RelatedVideos/RelatedVideos';
import Comment from './components/Comment/Comment';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            videoId: '4LZo9ugJTWQ',
            videoTitle: '',
            videoDescription: '',
            comments: []
        };
    }

    componentDidMount() {
        this.getVideo('4LZo9ugJTWQ');
        this.getComments();
      
    
    }

    getVideo = async (searchTerm) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=' + searchTerm +'&key=' + googleAPIKey + '&part=snippet')
        console.log(response.data)
        console.log(response.data.items[0].id.videoId)
        this.setState({
            videoId: response.data.items[0].id.videoId,
            videoTitle: response.data.items[0].snippet.title,
            videoDescription: response.data.items[0].snippet.description
        }, () => this.getRelatedVideo(response.data.items[0].id.videoId));
        
    }

    getRelatedVideo = async (video) => {
        let endpoint = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video}&type=video&key=${googleAPIKey}&part=snippet`;
        console.log(endpoint)
        let response = await axios.get(endpoint)
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
    
    getComments = async (id) => {
        let response = await axios.get('http://127.0.0.1:8000/comment/' + id + '/')
        this.setState({
           comments: response.data     
        })
    }



    addComment = async (comment) => {
        let response = await axios.post('http://127.0.0.1:8000/comment/', comment);
        
    }

    addReply = async (reply) => {
        let response = await axios.post('http://127.0.0.1:8000/reply/', reply);

    
    }
    

    render() {
        return (
            <div>
                <h1>YouTube React Project</h1>
                <SearchBar getAVideo={this.getVideo}/>
                <Container>
                    <Row>
                        <Col>
                            <VideoPlayer playVideo={this.state.videoId} title={this.state.videoTitle} description={this.state.videoDescription}/>
                            <RelatedVideos playRelatedVideo={this.state.searchResults} changeVideo={this.changeVideo} />
                        </Col>
                        <Col>
                            
                            <Comment createComment={this.addComment} video={this.state.videoId}/>
                        </Col>

                    </Row>
                
                
                </Container>
            </div>
        )
    }
}



export default App;
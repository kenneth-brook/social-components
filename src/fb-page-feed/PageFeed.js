import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import "./pageFeed.css";
 
export default class PageFeed extends Component {
  render() {
    return (
      <FacebookProvider className="app" appId="/tkbcustomdesign">
        <Page href="https://www.facebook.com/tkbcustomdesign" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}
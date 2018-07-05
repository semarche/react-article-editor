import React, { Component } from 'react';
import { json2html } from 'html2json';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
import './Article.css'

class Article extends Component {
    constructor() {
        super();
        this.state = { content: '' };
    }
    componentDidMount() {
        let content = localStorage.getItem('editorVal') || '';
        if (content) {
            content = json2html(JSON.parse(content))
        }
        this.setState({ content });
    }

    componentDidUpdate() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div
                className='acticle'
                ref={node => this.node = node}
                dangerouslySetInnerHTML={{ __html: this.state.content }}
            />
        );
    }
}

export default Article;

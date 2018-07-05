import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { html2json, json2html } from 'html2json';
import './Editor.css';

class Editors extends Component {
    constructor() {
        super();
        this.state = { content: '' };
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    componentDidMount() {
        let content = localStorage.getItem('editorVal') || '';
        if (content) {
            content = json2html(JSON.parse(content))
        }
        this.setState({ content })
    }
    handleEditorChange(content) {
        this.setState({ content });
    }
    handleSave() {
        const result = html2json(this.state.content);
        localStorage.setItem('editorVal', JSON.stringify(result))
    }
    render() {
        return (
            <div className='editor'>
                <Editor
                    apiKey="57ag969589o77xfgqd907m7688dzvdb914gcytbmwsug3hyz"
                    init={{
                        plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help emoticons code powerpaste',
                        toolbar: 'undo redo | cut copy paste | bold italic underline strikethrough forecolor backcolor | fontselect | formatselect | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | emoticons',
                        // menubar: 'file',
                        height: 500,
                        theme: 'modern',
                        skin: 'lightgray',
                        // inline: true,
                        image_advtab: true,
                        browser_spellcheck: true,
                    }}
                    value={this.state.content}
                    onEditorChange={this.handleEditorChange}
                />
                <div className='button-wrapper'>
                    <button onClick={this.handleSave}>
                        Save
                    </button>
                </div>
            </div>
        );
    }
}

export default Editors;

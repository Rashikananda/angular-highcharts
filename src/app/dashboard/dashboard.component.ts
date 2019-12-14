import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuillInitializeService } from '../service/quill-initialize-service.service';
import { MatDialog } from '@angular/material';
import { DialougeComponent } from '../dialouge/dialouge.component';
import { DataService } from '../service/data.service';
import { templates } from "../service/Constants";
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
declare const   jsPDF, $;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  @ViewChild ('exportExPDF') public exportExPDF: ElementRef;
  @ViewChild ('quillEditor') public quillEditor;
  quill;
  htmlText = templates[0];
  hasFocus = false;
  props = [{id:1,name: 'foody'},{id:2,name:'sporty'}];
  atValues = [
    { id: 1, value: 'Fredrik Sundqvist', link: 'https://google.com' },
    { id: 2, value: 'Patrik Sjölin' }
  ];
  hashValues = [
    { id: 3, value: 'Fredrik Sundqvist 2' },
    { id: 4, value: 'Patrik Sjölin 2' }
  ]

  quillConfig={
    // toolbar: '.toolbar',
    // toolbar: {
    //   container: [
    //     ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    //     ['code-block'],
    //     [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    //     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    //     //[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    //     //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    //     //[{ 'direction': 'rtl' }],                         // text direction

    //     //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    //     //[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    //     //[{ 'font': [] }],
    //     //[{ 'align': [] }],

    //     ['clean'],                                         // remove formatting button

    //     ['link'],
    //     //['link', 'image', 'video']  
    //     ['emoji'], 
    //   ],
    //   handlers: {'emoji': function() {}}
    // },
    // autoLink: true,

    // mention: {
    //   allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
    //   mentionDenotationChars: ["@", "#"],
    //   source: (searchTerm, renderList, mentionChar) => {
    //     let values;

    //     if (mentionChar === "@") {
    //       values = this.atValues;
    //     } else {
    //       values = this.hashValues;
    //     }
        
    //     if (searchTerm.length === 0) {
    //       renderList(values, searchTerm);
    //     } else {
    //       const matches = [];
    //       for (var i = 0; i < values.length; i++)
    //         if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) matches.push(values[i]);
    //       renderList(matches, searchTerm);
    //     }
    //   },
    // },
    // "emoji-toolbar": true,
    // "emoji-textarea": false,
    // "emoji-shortname": true,
    keyboard: {
      bindings: {
        // shiftEnter: {
        //   key: 13,
        //   shiftKey: true,
        //   handler: (range, context) => {
        //     // Handle shift+enter
        //     console.log("shift+enter")
        //   }
        // },
        enter:{
          key:13,
          handler: (range, context)=>{
            console.log("enter");
            return true;
          }
        }
      }
    }
  }
  fileContent;
  templateIndexChange($event) {
    if( $event === -1 || templates.length - 1 < $event) {
      this.htmlText = '';
    } else {
      this.htmlText = templates[$event]

    }
  }
  public onChange(fileList): void {
    console.log(fileList);
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    self.service.sendCamapignProperty(fileList[0]).subscribe(() => {
      self.getProperties();
    });
    
  }

 getProperties() { this.service.getProperties().subscribe((a:any) => {
  console.log('a', a)
  if( isNullOrUndefined(a) || a.length ===0) {
    this.props =  [{id:1,name: 'foody'},{id:2,name:'sporty'}];

  } else {
    this.props = a;
  }
});

  }
  constructor(
    private quillInitializeService: QuillInitializeService, public dialog: MatDialog,private service: DataService
  ){

  }
  animal: string;
  name: string;


  openDialog(): void {
    const dialogRef = this.dialog.open(DialougeComponent, {
      width: '70%',
      data: {title: "", props: this.props, selectedProps: [],template: this.htmlText}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // result.selectedProps = 
      this.service.createCampaign(result).subscribe( a => {
        console.log(a);
      }, err => console.log(err));
    });
  }


  test=(event)=>{
    console.log(event.keyCode);
  }

  onSelectionChanged = (event) =>{
    if(event.oldRange == null){
      this.onFocus();
    }
    if(event.range == null){
      this.onBlur();
    }
  }

  onContentChanged = (event) =>{
    //console.log(event.html);
  }

  onFocus = () =>{
    console.log("On Focus");
  }
  onBlur = () =>{
    console.log("Blurred");
  }


  ngOnInit() {

    this.getProperties();
    // var quill = new Quill('#editor', {
    //   // theme: 'snow'
      
    
    //   modules: { toolbar: '#toolbar' }
    // });
  }

  exportAsPdf() {
    console.log(this.quillEditor.quillEditor.root.innerHTML);
    console.log(this.exportExPDF, this.htmlText,document.getElementById('exportExPDF'));
  //  let doc = new jsPDF('p','pt','a4');
  //  doc.setDrawColor(255,0,0);
  //  doc.setProperties({
  //   title: 'Title',
  //   subject: 'This is the subject',
  //   author: 'Author Name',
  //   keywords: 'generated, javascript, web 2.0, ajax',
  //   creator: 'Creator Name'
  //  });
  //  doc.addHTML(this.exportExPDF.nativeElement.innerHTML, () =>{
  //   doc.save("ccda.pdf");
  // });
  var doc = new jsPDF();
  var elementHTML = $('#exportExPDF').html();
  var specialElementHandlers = {
      '#elementH': function (element, renderer) {
          return true;
      }
  };
  doc.addHTML(this.quillEditor.quillEditor.root.innerText, () => {
    doc.save("ccda.pdf");
});
// doc.save('file.pdf');
  
  // Save the PDF
  // doc.save('sample-document.pdf');
  
 
  }
}

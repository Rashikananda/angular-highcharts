import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css']
})
export class DialougeComponent implements OnInit {
  
  htmlText = `<table border="0" cellpadding="0" cellspacing="0" width="600">
  <tbody>
  <tr>
      <td align="center" valign="top">
            
          <table border="0" cellpadding="0" cellspacing="0" width="600">
              <tbody><tr>
                  <td colspan="4" valign="top" class="bodyContent">
  
                        
                        <table border="0" cellpadding="20" cellspacing="0" width="100%">
                            <tbody><tr>
                                <td valign="top">
                                    <div>
                                        <h1 class="h1">Heading 1</h1>
                                        
                                        
                                        
                                        <strong>Getting started:</strong> 
                                        <br>
                                        After you enter your content, highlight the text you want to style and select the options you set in the style editor in the "styles" drop down box. Want to <a href="http://www.mailchimp.com/kb/article/im-using-the-style-designer-and-i-cant-get-my-formatting-to-change" target="_blank">get rid of styling on a bit of text</a>, but having trouble doing it? Just use the "remove formatting" button to strip the text of any formatting and reset your style.
                                    </div>
    </td>
                            </tr>
                        </tbody></table>
                        
  
                    </td>
                </tr>
              <tr>
                  <td valign="top" width="130" class="columnOneContent">
                    
                        
                        <table border="0" cellpadding="20" cellspacing="0" width="100%">
                            <tbody><tr>
                                <td valign="top">
                                    <img src="http://gallery.mailchimp.com/653153ae841fd11de66ad181a/images/placeholder_110.gif">
                                    <div>
                                       <h4 class="h4">Heading 4</h4>
                                        <strong>Repeatable content blocks:</strong> Repeatable sections are noted with plus and minus signs so that you can add and subtract content blocks. You can also <a href="http://www.mailchimp.com/kb/article/how-do-i-work-with-repeatable-content-blocks" target="_blank">get a little fancy</a>: repeat blocks and remove all text to make image "gallery" sections, or do the opposite and remove images for text-only blocks!
                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
                        
                    
                    </td>
                  <td valign="top" width="130" class="columnTwoContent">
                    
                        
                        <table border="0" cellpadding="20" cellspacing="0" width="100%">
                            <tbody><tr>
                                <td valign="top">
                                    <img src="http://gallery.mailchimp.com/653153ae841fd11de66ad181a/images/placeholder_110.gif">
                                    <div>
                                       <h4 class="h4">Heading 4</h4>
                                        <strong>Repeatable content blocks:</strong> Repeatable sections are noted with plus and minus signs so that you can add and subtract content blocks. You can also <a href="http://www.mailchimp.com/kb/article/how-do-i-work-with-repeatable-content-blocks" target="_blank">get a little fancy</a>: repeat blocks and remove all text to make image "gallery" sections, or do the opposite and remove images for text-only blocks!
                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
                        
                    
                    </td>
                  <td valign="top" width="130" class="columnThreeContent">
                    
                        
                        <table border="0" cellpadding="20" cellspacing="0" width="100%">
                            <tbody><tr>
                                <td valign="top">
                                    <img src="http://gallery.mailchimp.com/653153ae841fd11de66ad181a/images/placeholder_110.gif">
                                    <div>
                                       <h4 class="h4">Heading 4</h4>
                                        <strong>Repeatable content blocks:</strong> Repeatable sections are noted with plus and minus signs so that you can add and subtract content blocks. You can also <a href="http://www.mailchimp.com/kb/article/how-do-i-work-with-repeatable-content-blocks" target="_blank">get a little fancy</a>: repeat blocks and remove all text to make image "gallery" sections, or do the opposite and remove images for text-only blocks!
                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
                        
                    
                    </td>
                  <td valign="top" width="130" class="columnFourContent">
                    
                        
                        <table border="0" cellpadding="20" cellspacing="0" width="100%">
                            <tbody><tr>
                                <td valign="top">
                                    <img src="http://gallery.mailchimp.com/653153ae841fd11de66ad181a/images/placeholder_110.gif">
                                    <div>
                                       <h4 class="h4">Heading 4</h4>
                                        <strong>Repeatable content blocks:</strong> Repeatable sections are noted with plus and minus signs so that you can add and subtract content blocks. You can also <a href="http://www.mailchimp.com/kb/article/how-do-i-work-with-repeatable-content-blocks" target="_blank">get a little fancy</a>: repeat blocks and remove all text to make image "gallery" sections, or do the opposite and remove images for text-only blocks!
                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
                        
                    
                    </td>
                </tr>
            </tbody></table>
            
        </td>
    </tr>
  <tr>
      <td align="center" valign="top">
            
          <table border="0" cellpadding="10" cellspacing="0" width="600">
              <tbody><tr>
                  <td valign="top" class="footerContent">
                    
                        
                        <table border="0" cellpadding="10" cellspacing="0" width="100%">
                            <tbody><tr>
                                <td colspan="2" valign="middle">
                                    <div>
                                        &nbsp;<a href="unsafe:|TWITTER:PROFILEURL|">follow on Twitter</a> | <a href="unsafe:|FACEBOOK:PROFILEURL|">friend on Facebook</a> | <a href="|FORWARD|">forward to a friend</a>&nbsp;
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top" width="350">
                                    <div>
        <em>Copyright © |CURRENT_YEAR| |LIST:COMPANY|, All rights reserved.</em>
        <br>
        |IFNOT:ARCHIVE_PAGE| |LIST:DESCRIPTION|
        <br>
        <strong>Our mailing address is:</strong>
        <br>
        |HTML:LIST_ADDRESS_HTML||END:IF| 
                                    </div>
                                </td>
                                <td valign="top" width="190">
                                    <div>
                                        |IF:REWARDS| |HTML:REWARDS| |END:IF|
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" valign="middle">
                                    <div>
                                        &nbsp;<a href="|UNSUB|">unsubscribe from this list</a> | <a href="|UPDATE_PROFILE|">update subscription preferences</a>&nbsp;
                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
                        
                    
                    </td>
                </tr>
            </tbody></table>
            
        </td>
    </tr>
  </tbody></table>`;
  constructor(public dialogRef: MatDialogRef<DialougeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  toggelChange = (event,prop) => {
      console.log(event);
      const index = this.data.selectedProps.indexOf(prop);
      if (index > -1) {
        this.data.selectedProps.splice(index ,1)
      } else {
        this.data.selectedProps.push(prop)
      }
  }

}

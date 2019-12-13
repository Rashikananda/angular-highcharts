export const API_ENDPOINT = "http://192.168.43.105:9000";
export const ALL_TOPICS = API_ENDPOINT + "topics";
export const ALL_CONSUMERS = API_ENDPOINT + "consumers";
export const TOPIC_DETAILS = API_ENDPOINT + "arrivalRate";
export const CONSUMER_DETAILS = API_ENDPOINT + "consumerDetails";
export const DASHBOARD = API_ENDPOINT + "dashboard";
export const template_prefix = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Re-engagement</title>
  <script>
            const myFunction = () => {
                alert("loaded !!");
                console.log('aaaaa');
            }
            
            window.onload = myFunction; 
        </script>
</head>`
export const template_suffix = ``
export const templates = [`

<body yahoo bgcolor="#ffffff">
<table width="100%" bgcolor="#ffffff" border="0" cellpadding="10" cellspacing="0">
<tr>
  <td>
    <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
    <![endif]-->
    <table bgcolor="#ffffff" class="content" align="center" cellpadding="0" cellspacing="0" border="0">
			<tr>
				<td valign="top" mc:edit="headerBrand" id="templateContainerHeader">

					<p style="text-align:center;margin:0;padding:0;">
						<img src="http://c0185784a2b233b0db9b-d0e5e4adc266f8aacd2ff78abb166d77.r51.cf2.rackcdn.com/templates/cog-01.jpg" style="max-width:600px;display:inline-block;" />
					</p>

				</td>
			</tr>
			<tr>
				<td align="center" valign="top">
						<!-- BEGIN BODY // -->
							<table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateContainer">
									<tr>
											<td valign="top" class="bodyContent" mc:edit="body_content">
												<p>Hi name_sendmail,</p>
												<p>I noticed you were interested in learning more about growing --Company=your business--. I would like to <a href="http://www.autopilothq.com/">invite you</a> to our free 30 day business growth course. Or, you can <a href="http://www.autopilothq.com/">signup</a> for a free complimentary 45 minute session for being such a valuable contributor to our Facebook community.
                          <br /><br />
                          Just to confirm, is this your first time starting a business, or have you done it before? </p>
											</td>
									</tr>
									<tr align="top">
											<td valign="top" class="bodyContentImage">
												<table border="0" cellpadding="0" cellspacing="0" valign="top">
													<tr>
														<td align="left" width="50" valign="top" mc:edit="footer_sigimage" style="margin:0;padding:0;">
															<p style="margin-bottom:10px; padding:0;display:block;">
																<img src="http://c0185784a2b233b0db9b-d0e5e4adc266f8aacd2ff78abb166d77.r51.cf2.rackcdn.com/templates/img_profile.jpg" style="max-width:600px;display:block;" />
															</p>
														</td>
														<td width="15" align="left" valign="top" style="width:15px;margin:0;padding:0;">&nbsp;</td>
														<td align="left" valign="top" mc:edit="footer_sig" valign="top" style="margin:0;padding-top:10px;line-height:1;">
															<h4><strong>Jenny Smith</strong></h4>
															<h5>Business Development at COG</h5>
														</td>
													</tr>
												</table>
											</td>
									</tr>
							</table>
							<!-- // END BODY -->
					</td>
			</tr>
			<tr>
				<td align="center" valign="top" id="bodyCellFooter" class="unSubContent">
					<table width="100%" border="0" cellpadding="0" cellspacing="0" id="templateContainerFooter">
						<tr>
							<td valign="top" width="100%" mc:edit="footer_unsubscribe">
								<p style="text-align:center;">
									<img src="http://c0185784a2b233b0db9b-d0e5e4adc266f8aacd2ff78abb166d77.r51.cf2.rackcdn.com/templates/cog-03.jpg" style="max-width:600px;margin:0 auto 0 auto;display:inline-block;" />
								</p>
								<h6 style="text-align:center;margin-top: 9px;">COG Inc</h6>
								<h6 style="text-align:center;">589&#8203; Howard&#8203; Street&#8203;</h6>
								<h6 style="text-align:center;">San Francisco,&#8203; CA&#8203; 94105&#8203;</h6>
								<h6 style="text-align:center;margin-top: 7px;"><a href="https://rxjs-nested-request-of-observable.stackblitz.io?email=rashikanandapattanaik@gmail.com" >unsubscribe</a></h6>
							</td>
						</tr>
					</table>
				</td>
			</tr>

    </table>
    <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
    </table>
    <![endif]-->
    </td>
  </tr>
</table>
<style type="text/css">
  /* /\/\/\/\/\/\/\/\/ CLIENT-SPECIFIC STYLES /\/\/\/\/\/\/\/\/ */
  #outlook a{padding:0;} /* Force Outlook to provide a "view in browser" message */
  .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */
  .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */
  body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */
  table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */
  img{-ms-interpolation-mode:bicubic;max-width:100%;} /* Allow smoother rendering of resized image in Internet Explorer */
  td ul li {
    font-size: 16px;
  }
  /* /\/\/\/\/\/\/\/\/ RESET STYLES /\/\/\/\/\/\/\/\/ */
  body{margin:0; padding:0;}
  img{
    max-width:100%;
    border:0;
    line-height:100%;
    outline:none;
    text-decoration:none;
  }
  table{border-collapse:collapse !important;}
  .content {width: 100%; max-width: 600px;}
  .content img { height: auto; min-height: 1px; }
  .content {width: 100%; max-width: 600px;}

  #bodyTable{margin:0; padding:0; width:100% !important;}
  #bodyCell{margin:0; padding:0;}
  #bodyCellFooter{margin:0; padding:0; width:100% !important;padding-top:39px;padding-bottom:15px;}
  body {margin: 0; padding: 0; min-width: 100%!important;}

  #templateContainerHeader{
    font-size: 14px;
    padding-top:2.429em;
    padding-bottom:0.929em;
  }
  #templateContainerFootBrd {
    border-bottom:1px solid #e2e2e2;
    border-left:1px solid #e2e2e2;
    border-right:1px solid #e2e2e2;
    border-radius: 0 0 4px 4px;
    background-clip: padding-box;
    border-spacing: 0;
    height: 10px;
    width:100% !important;
  }
  #templateContainer{
    border-top:1px solid #e2e2e2;
    border-bottom:1px solid #e2e2e2;
    border-left:1px solid #e2e2e2;
    border-right:1px solid #e2e2e2;
    border-radius: 4px 4px 4px 4px;
    background-clip: padding-box;
    border-spacing: 0;
  }

  /**
  * @tab Page
  * @section heading 1
  * @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
  * @style heading 1
  */
  h1{
     color:#2e2e2e;
    display:block;
     font-family:Helvetica;
     font-size:26px;
     line-height:1.385em;
     font-style:normal;
     font-weight:normal;
     letter-spacing:normal;
    margin-top:0;
    margin-right:0;
    margin-bottom:15px;
    margin-left:0;
     text-align:left;
  }

  /**
  * @tab Page
  * @section heading 2
  * @tip Set the styling for all second-level headings in your emails.
  * @style heading 2
  */
  h2{
     color:#2e2e2e;
    display:block;
     font-family:Helvetica;
     font-size:22px;
     line-height:1.455em;
     font-style:normal;
     font-weight:normal;
     letter-spacing:normal;
    margin-top:0;
    margin-right:0;
    margin-bottom:15px;
    margin-left:0;
     text-align:left;
  }

  /**
  * @tab Page
  * @section heading 3
  * @tip Set the styling for all third-level headings in your emails.
  * @style heading 3
  */
  h3{
     color:#545454;
    display:block;
     font-family:Helvetica;
     font-size:18px;
     line-height:1.444em;
     font-style:normal;
     font-weight:normal;
     letter-spacing:normal;
    margin-top:0;
    margin-right:0;
    margin-bottom:15px;
    margin-left:0;
     text-align:left;
  }

  /**
  * @tab Page
  * @section heading 4
  * @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
  * @style heading 4
  */
  h4{
     color:#545454;
    display:block;
     font-family:Helvetica;
     font-size:14px;
     line-height:1.571em;
     font-style:normal;
     font-weight:normal;
     letter-spacing:normal;
    margin-top:0;
    margin-right:0;
    margin-bottom:15px;
    margin-left:0;
     text-align:left;
  }


  h5{
     color:#545454;
    display:block;
     font-family:Helvetica;
     font-size:13px;
     line-height:1.538em;
     font-style:normal;
     font-weight:normal;
     letter-spacing:normal;
    margin-top:0;
    margin-right:0;
    margin-bottom:15px;
    margin-left:0;
     text-align:left;
  }


  h6{
     color:#545454;
    display:block;
     font-family:Helvetica;
     font-size:12px;
     line-height:2.000em;
     font-style:normal;
     font-weight:normal;
     letter-spacing:normal;
    margin-top:0;
    margin-right:0;
    margin-bottom:15px;
    margin-left:0;
     text-align:left;
  }

  p {
     color:#545454;
    display:block;
     font-family:Helvetica;
     font-size:16px;
     line-height:1.500em;
     font-style:normal;
     font-weight:normal;
     letter-spacing:normal;
    margin-top:0;
    margin-right:0;
    margin-bottom:15px;
    margin-left:0;
     text-align:left;
  }

  .unSubContent a:visited { color: #a1a1a1; text-decoration:underline; font-weight:normal;}
  .unSubContent a:focus   { color: #a1a1a1; text-decoration:underline; font-weight:normal;}
  .unSubContent a:hover   { color: #a1a1a1; text-decoration:underline; font-weight:normal;}
  .unSubContent a:link   { color: #a1a1a1 ; text-decoration:underline; font-weight:normal;}
  .unSubContent a .yshortcuts   { color: #a1a1a1 ; text-decoration:underline; font-weight:normal;}

  .unSubContent h6 {
    color: #a1a1a1;
    font-size: 12px;
    line-height: 1.5em;
    margin-bottom: 0;
  }

  .bodyContent{
    color:#505050;
    font-family:Helvetica;
    font-size:14px;
    line-height:150%;
    padding-top:3.143em;
    padding-right:3.5em;
    padding-left:3.5em;
    padding-bottom:0.714em;
     text-align:left;
  }
  .bodyContentImage {
    color:#505050;
    font-family:Helvetica;
    font-size:14px;
    line-height:150%;
    padding-top:0;
    padding-right:3.571em;
    padding-left:3.571em;
    padding-bottom:2em;
    text-align:left;
  }

  .bodyContentImage h4 {
    color: #4E4E4E;
    font-size: 13px;
    line-height: 1.154em;
    font-weight:normal;
    margin-bottom: 0;
  }
  .bodyContentImage h5 {
    color: #828282;
    font-size: 12px;
    line-height: 1.667em;
    margin-bottom: 0;
  }

  /**
  * @tab Body
  * @section body link
  * @tip Set the styling for your email's main content links. Choose a color that helps them stand out from your text.
  */
  a:visited { color: #3386e4; text-decoration:none;}
  a:focus   { color: #3386e4; text-decoration:none;}
  a:hover   { color: #3386e4; text-decoration:none;}
  a:link   { color: #3386e4 ; text-decoration:none;}
  a .yshortcuts   { color: #3386e4 ; text-decoration:none;}

  .bodyContent img{
    height:auto;
    max-width:498px;
  }

  .footerContent{
    color:#808080;
    font-family:Helvetica;
    font-size:10px;
    line-height:150%;
    padding-top:2.000em;
    padding-right:2.000em;
    padding-bottom:2.000em;
    padding-left:2.000em;
    text-align:left;
  }

  /**
  * @tab Footer
  * @section footer link
  * @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
  */
  .footerContent a:link, .footerContent a:visited, /* Yahoo! Mail Override */ .footerContent a .yshortcuts, .footerContent a span /* Yahoo! Mail Override */{
     color:#606060;
     font-weight:normal;
     text-decoration:underline;
  }


  @media only screen and (max-width: 550px), screen and (max-device-width: 550px) {
    body[yahoo] .hide {display: none!important;}
    body[yahoo] .buttonwrapper {background-color: transparent!important;}
    body[yahoo] .button {padding: 0px!important;}
    body[yahoo] .button a {background-color: #e05443; padding: 15px 15px 13px!important;}
    body[yahoo] .unsubscribe {display: block; margin-top: 20px; padding: 10px 50px; background: #2f3942; border-radius: 5px; text-decoration: none!important; font-weight: bold;}
  }
  /*@media only screen and (min-device-width: 601px) {
    .content {width: 600px !important;}
  }*/
  @media only screen and (max-width: 480px){
    h1 {
      font-size:34px !important;
    }
    h2{
      font-size:30px !important;
    }
    h3{
      font-size:24px !important;
    }
    h4{
      font-size:18px !important;
    }
    h5{
      font-size:16px !important;
    }
    h6{
      font-size:14px !important;
    }
    p {
      font-size: 18px !important;
    }

    .bodyContent {
      padding: 6% 5% 1% 6% !important;
    }
    .bodyContent img {
      max-width: 100% !important;
    }
    .bodyContentImage {
      padding: 3% 6% 3% 6% !important;
    }
    .bodyContentImage img {
      max-width: 100% !important;
    }
    .bodyContentImage h4 {
      font-size: 16px !important;
    }
    .bodyContentImage h5 {
      font-size: 15px !important;
      margin-top:0;
    }
  }
  .ii a[href] {color: inherit !important;}
  span > a, span > a[href] {color: inherit !important;}
  a > span, .ii a[href] > span {text-decoration: inherit !important;}
</style>
</body>

`, `<table border="0" cellpadding="0" cellspacing="0" width="600">
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
                                      <h1 class="h1">Heloooo name_sendmail,</h1>
                                      
                                      
                                      
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
</tbody></table>`]

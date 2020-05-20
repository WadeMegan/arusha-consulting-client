import React, { Component } from 'react'
import './PrivacyPolicyPage.css'
import { Link } from 'react-router-dom'


export default class PrivacyPolicyPage extends Component{    

    //static contextType = PostsListContext

    componentWillMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(    
            <>
            <section className='privacyPolicyPageSection'>

			<h1>Welcome to our Privacy Policy</h1>
			<h2>Your privacy is critically important to us.</h2>
			<p>Arusha Consulting is located at:<br/>
			<address>
			  Arusha Consulting<br/>Chicago <br />Illinois, United States<br/>7739911194</address>
              </p>

			<p>It is Arusha Consulting's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="https://www.arushainc.com/">https://www.arushainc.com/</a> (hereinafter, "us", "we", or "https://www.arushainc.com/"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
			<p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.</p>

						<h2>Website Visitors</h2>
			<p>Like most website operators, Arusha Consulting collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Arusha Consulting's purpose in collecting non-personally identifying information is to better understand how Arusha Consulting's visitors use its website. From time to time, Arusha Consulting may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.</p>
			<p>Arusha Consulting also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on https://www.arushainc.com/ blog posts. Arusha Consulting only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.</p>
			
						<h2>Gathering of Personally-Identifying Information</h2>
			<p>Certain visitors to Arusha Consulting's websites choose to interact with Arusha Consulting in ways that require Arusha Consulting to gather personally-identifying information. The amount and type of information that Arusha Consulting gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at https://www.arushainc.com/ to provide a username and email address.</p>

            <h2>Third party sign-in</h2>			  
			  	<p>If you link your Facebook or Google accounts, we receive access to public information provided by those parties. This includes, but is not limited to, your full name, email address, profile image, and Facebook/Google user id. The information is used to enhance the vistor's experience when using the website to display personalised content and possibly advertising. This information may be stored on the server when you post comments, like comments, or otherwise interact with arushainc.com. The information we get from third party services depend on your settings and their privacy policies. We will not share your information to post to your social networks without your permission. </p>
			
						<h2>Security</h2>
			<p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
			
						<h2>Advertisements</h2>
			<p>Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Arusha Consulting and does not cover the use of cookies by any advertisers.</p>
			

						<h2>Links To External Sites</h2>
			<p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.</p>
			<p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>
			
			
			
						<h2>Aggregated Statistics</h2>
			<p>Arusha Consulting may collect statistics about the behavior of visitors to its website. Arusha Consulting may display this information publicly or provide it to others. However, Arusha Consulting does not disclose your personally-identifying information.</p>
			
			
						<h2>Cookies</h2>
			<p>To enrich and perfect your online experience, Arusha Consulting uses "Cookies," similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.</p>
			<p>A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Arusha Consulting uses cookies to help Arusha Consulting identify and track visitors, their usage of https://www.arushainc.com/, and their website access preferences. Arusha Consulting visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Arusha Consulting's websites, with the drawback that certain features of Arusha Consulting's websites may not function properly without the aid of cookies.</p>
			<p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Arusha Consulting's use of cookies.</p>
			
			
			
						<h2>Privacy Policy Changes</h2>
			<p>Although most changes are likely to be minor, Arusha Consulting may change its Privacy Policy from time to time, and in Arusha Consulting's sole discretion. Arusha Consulting encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
			
			
						  
			
			
			<h2>Credit & Contact Information</h2>
							<p>This privacy policy was created at <a href="https://termsandconditionstemplate.com/privacy-policy-generator/" title="Privacy policy template generator" target="_blank">termsandconditionstemplate.com</a>. If you have any questions about this Privacy Policy, please contact us via <a href="mailto:Heather@arushainc.com">email</a> or <a href="tel:7739911194">phone</a>.</p>
					




            </section>   
            <footer className='aboutPageFooter'>
            <p><Link to='/blog'>Fairground</Link> and <Link to='/assets'>Fairground Assets</Link> are powered by <Link to='/'>Arusha Consulting</Link>, a boutique consulting and coaching firm dedicated to inspiring awareness and igniting action for the greatest good. On the consulting side, we focus on leadership, people management, and diversity and inclusion. On the coaching side, we specialize in helping people gain clarity about their values, strengths, desires, resources, relationships, fears, and obstacles to help them pursue their best lives. Our ability to help individuals explore their own relationship to issues of diversity, inclusion, and equity helps distinguish us from other consulting/coaching groups. Reach out to learn more about our 1:1 coaching, workshops, and consulting offerings.</p>
            <p>Questions? Comments? Reach out to Heather at <a href={"mailto:Heather@arushainc"}> Heather@arushainc.com</a>.</p>
                <p>Reach out to learn more about 1:1 coaching, workshops, and consulting offerings.</p>
                <div className='copyrightContainer'>
                    <p>Copyright 2020 - Arusha Consulting</p>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </div>
            </footer>
            </>
        )
    }
}
//   Assumes following datashape:
//   event = {
//      name: 'Asghar Farhadi',
//      services: "3,4,0",
//      description: "I have a big house",
//      contact_info: {
//        email: 'asghar@farhadi.film'
//        timestamp: '2020-01-20 22:22 PM'
//      },
//  }

module.exports = {
  emailSubject: function(event) {
    const subject = `[QUOTE_REQUEST] ${event.name}`
    return subject
  },
  emailContent: function(event) {
    const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      ${this.head()}
      ${this.body(event)}
      </html>
      `
    return html
  },
  head: function() {
    return `<head>
      <!-- If you delete this meta tag, Half Life 3 will never be released. -->
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>ZURBemails</title>
      <!-- CSS Reset : BEGIN -->
      <style>
        /* ---------------- GLOBAL ----------------- */
        * {
          margin: 0;
          padding: 0;
        }
  
        * {
          font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
        }
  
        img {
          max-width: 100%;
        }
  
        .collapse {
          margin: 0;
          padding: 0;
        }
  
        body {
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: none;
          width: 100% !important;
          height: 100%;
        }
  
  
        /* -------------------------------ELEMENTS --------------------------------- */
        a {
          color: #2BA6CB;
        }
  
        .btn {
          text-decoration: none;
          color: #FFF;
          background-color: #666;
          padding: 10px 16px;
          font-weight: bold;
          margin-right: 10px;
          text-align: center;
          cursor: pointer;
          display: inline-block;
        }
  
        p.callout {
          padding: 15px;
          background-color: #ECF8FF;
          margin-bottom: 15px;
        }
  
        .callout a {
          font-weight: bold;
          color: #2BA6CB;
        }
  
        table.social {
          /* 	padding:15px; */
          background-color: #ebebeb;
  
        }
  
        .social .soc-btn {
          padding: 3px 7px;
          font-size: 12px;
          margin-bottom: 10px;
          text-decoration: none;
          color: #FFF;
          font-weight: bold;
          display: block;
          text-align: center;
        }
  
        a.fb {
          background-color: #3B5998 !important;
        }
  
        a.tw {
          background-color: #1daced !important;
        }
  
        a.gp {
          background-color: #DB4A39 !important;
        }
  
        a.ms {
          background-color: #000 !important;
        }
  
        .sidebar .soc-btn {
          display: block;
          width: 100%;
        }
  
        /* ---------------------------HEADER ---------------------- */
        table.head-wrap {
          width: 100%;
        }
  
        .header.container table td.logo {
          padding: 15px;
        }
  
        .header.container table td.label {
          padding: 15px;
          padding-left: 0px;
        }
  
  
        /* ------------------------------------- 
          BODY 
  ------------------------------------- */
        table.body-wrap {
          width: 100%;
        }
  
  
        /* ------------------------------------- 
          FOOTER 
  ------------------------------------- */
        table.footer-wrap {
          width: 100%;
          clear: both !important;
        }
  
        .footer-wrap .container td.content p {
          border-top: 1px solid rgb(215, 215, 215);
          padding-top: 15px;
        }
  
        .footer-wrap .container td.content p {
          font-size: 10px;
          font-weight: bold;
  
        }
  
        /*----- Div ----*/
        .divider {
          border-bottom: 0.5px solid #707070;
          background-color: #707070;
          height: 1px;
          margin: 0.5em 0px 1.5em;
        }
  
        /* ---------------------- TYPOGRAPHY ---------------- */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
          line-height: 1.1;
          margin-bottom: 15px;
          color: #000;
        }
  
        h1 small,
        h2 small,
        h3 small,
        h4 small,
        h5 small,
        h6 small {
          font-size: 60%;
          color: #6f6f6f;
          line-height: 0;
          text-transform: none;
        }
  
        h1 {
          font-weight: 200;
          font-size: 44px;
        }
  
        h2 {
          font-weight: 200;
          font-size: 37px;
        }
  
        h3 {
          font-weight: 500;
          font-size: 27px;
        }
  
        h4 {
          font-weight: 500;
          font-size: 23px;
        }
  
        h5 {
          font-weight: 900;
          font-size: 17px;
        }
  
        h6 {
          font-weight: 900;
          font-size: 14px;
          text-transform: uppercase;
          color: #444;
        }
  
        .collapse {
          margin: 0 !important;
        }
  
        p,
        ul {
          margin-bottom: 10px;
          font-weight: normal;
          font-size: 14px;
          line-height: 1.6;
        }
  
        p.lead {
          font-size: 17px;
        }
  
        p.last {
          margin-bottom: 0px;
        }
  
        ul li {
          margin-left: 5px;
          list-style-position: inside;
        }
  
        /* ----------------------- SIDEBAR --------------------- */
        ul.sidebar {
          background: #ebebeb;
          display: block;
          list-style-type: none;
        }
  
        ul.sidebar li {
          display: block;
          margin: 0;
        }
  
        ul.sidebar li a {
          text-decoration: none;
          color: #666;
          padding: 10px 16px;
          /* 	font-weight:bold; */
          margin-right: 10px;
          /* 	text-align:center; */
          cursor: pointer;
          border-bottom: 1px solid #777777;
          border-top: 1px solid #FFFFFF;
          display: block;
          margin: 0;
        }
  
        ul.sidebar li a.last {
          border-bottom-width: 0px;
        }
  
        ul.sidebar li a h1,
        ul.sidebar li a h2,
        ul.sidebar li a h3,
        ul.sidebar li a h4,
        ul.sidebar li a h5,
        ul.sidebar li a h6,
        ul.sidebar li a p {
          margin-bottom: 0 !important;
        }
  
  
  
        /* --------------------------- RESPONSIVENESS
        Nuke it from orbit. It's the only way to be sure. -------------- */
  
        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
        .container {
          display: block !important;
          max-width: 600px !important;
          /* margin: 0 auto !important; */
          /* makes it centered */
          clear: both !important;
        }
  
        /* This should also be a block element, so that it will fill 100% of the .container */
        .content {
          padding: 15px;
          max-width: 600px;
          margin: 0 auto;
          display: block;
        }
  
        /* Let's make sure tables in the content area are 100% wide */
        .content table {
          width: 100%;
        }
  
  
        /* Odds and ends */
        .column {
          width: 300px;
          float: left;
        }
  
        .column tr td {
          padding: 15px;
        }
  
        .column-wrap {
          padding: 0 !important;
          margin: 0 auto;
          max-width: 600px !important;
        }
  
        .column table {
          width: 100%;
        }
  
        .social .column {
          width: 280px;
          min-width: 279px;
          float: left;
        }
  
        /* Be sure to place a .clear element after each set of columns, just to be safe */
        .clear {
          display: block;
          clear: both;
        }
  
  
        /* ------------------------------------------- 
          PHONE
          For clients that support media queries.
          Nothing fancy. 
  -------------------------------------------- */
        @media only screen and (max-width: 600px) {
  
          a[class="btn"] {
            display: block !important;
            margin-bottom: 10px !important;
            background-image: none !important;
            margin-right: 0 !important;
          }
  
          div[class="column"] {
            width: auto !important;
            float: none !important;
          }
  
          table.social div[class="column"] {
            width: auto !important;
          }
  
        }
  
      </style>
      <!-- CSS Reset : END -->
  
      <!-- Progressive Enhancements : BEGIN -->
      <style>
        /* Media Queries */
        @media screen and (max-width: 600px) {
  
          /* What it does: Adjust typography on small screens to improve readability */
          .email-container p {
            font-size: 17px !important;
          }
  
        }
  
      </style>
      <!-- Progressive Enhancements : END -->
  
      <link rel="stylesheet" type="text/css" href="stylesheets/email.css" />
  
    </head>
  `
  },
  body: function(event) {
    return `<body bgcolor="#FFFFFF">
      <!-- BODY -->
      <table class="body-wrap">
        <tr>
          <td></td>
          <td class="container" bgcolor="#FFFFFF">
  
            <div class="content">
              <table>
                <tr>
                  <td>
                    <!-- Header -->
                    <h5 style='font-weight: bold'>
                      Requestor: ${event.name}
                    </h5>
                    <!-- Header -->
                    
                    <!-- Message Box -->
                    <div class="divider"> <span></span></div>
                    <!-- Message Box -->
                    <div>
                      ${this.startingMessage(event)}
                    </div>
                    <!-- Description -->
                    ${this.servicesDescription(event)}
                    </br>
                    <br/>
                    <div>
                    <p> <strong>Description: </strong></p>
                    </div>
                    <div>
                      <div style='padding-left: 20px'>
                        <p>${event.description}</p>
                      </div>
                    <div>
                    <div>
                    <p> <strong>Other Info: </strong></p>
                    </div>
                    <div>
                      <div style='padding-left: 20px'>
                        <p>timestamp: 
                        <span>${event.timestamp}</span></p>
                        <p>contact info: 
                        <span>${event.contactInfo.email}</span></p>
                      </div>
                    <div>
                    <!-- Description -->
                  </td>
                </tr>
              </table>
            </div>
  
          </td>
          <td></td>
        </tr>
      </table>
      <!-- /BODY -->
    </body>
  `
  },
  startingMessage: function(event) {
    return `<p>Dear Inest,<br/>
          Customer ${event.name} has asked for a qutoe. Please see below for more details.</p>`
  },
  servicesDescription: function(event) {
    return `
        <div style='margin-top: 20px'>
          <p id="description" style='font-weight: normal'><strong>Services: </string> </p>
          <div style='padding-left: 20px'>
            ${this.servicesInfo(event.services)}
          </div>
        </div>
      `
  },
  servicesInfo: function(services) {
    const services_arr = services.split(',')
    const htmls = []
    const servicesList = [
      { title: 'Lighting Automation', code: 0 },
      { title: 'Security System', code: 1 },
      { title: 'Security Camera', code: 2 },
      { title: 'Central Vacuum', code: 3 },
      { title: 'Electrical', code: 4 },
      { title: 'Sound System', code: 5 },
      { title: 'Climate Control', code: 6 },
      { title: 'Home Theatre', code: 7 },
      { title: 'Smart Blinds', code: 8 },
      { title: 'Other', code: 9 },
    ]
    for (const service in services_arr) {
      const obj = servicesList.find(i => i.code == service)
      htmls.push(obj.title)
    }
    const html = htmls.join(', <br/>')
    return html
  },

  nodeinfo: function(
    id,
    job_name,
    job_group_name,
    job_created_date,
    job_started_date,
    node_info
  ) {
    const ts = node_info['timestamp']
    const node_ts = node_info['node_timestamp']
    return `
    <div class="EmailTemplates-JOB" style='margin-top: 20px'>
      <p><strong>Job Group: ${job_group_name}</strong>
      <br/><strong>Job Name: ${job_name}</strong>
      <br/><br/> Last reading time: ${ts}
      <br/> Time since last reading: ${node_ts['amount']} ${node_ts['unit']}
      <br/><br/> LumiHub ID: ${node_info['gateway_id']}
      <br/> LumiNode ID: ${id.substring(0, Math.floor(id.length) / 2)}
      <span> | LumiSense ID: ${node_info['cable_id']}
      <br/>Job created on: ${job_created_date ? job_created_date : ''}
      <br/>Job started on: ${job_started_date ? job_started_date : ''}</p>
    </div>
    `
  },
  officePhoneLink: function() {
    return `<a href="tel:+1877-873-1792">+1 (877) 873-1792</a>`
  },
  emailAddressLink: function() {
    return `<span style='text-decoration: underline;'><a href="mailto:support@aoms-tech.com?Subject=" target="_blank">support@aoms-tech.com</a></span>`
  },
}

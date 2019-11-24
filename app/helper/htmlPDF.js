module.exports = name => {
  const date = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const today = `${date.getDate()} ${
    monthNames[date.getUTCMonth()]
  } ${date.getFullYear()}`;
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>PDF File</title>
  </head>
  <style>
    body {
      background-color: #ffffff;
      width: 595px;
      height: 842px;
      padding-top: 20px;
    }
    .wrapper {
      padding-left: 20px;
      padding-right: 20px;
    }
    .border-top {
      background-image: linear-gradient(to right, green, #073a0e);
      height: 25px;
      width: 100%;
    }
    .header {
      margin-top: 30px;
      display: flex;
    }
    .logo-image {
      width: 170px;
    }
    .address {
      margin-left: 30px;
      color: #313131;
      font-size: 5px;
      letter-spacing: 1.5px;
      line-height: 1.5;
    }
    .address-title {
      margin: 0px;
      font-weight: 700;
    }
    .sender-address {
      color: #292929;
      font-size: 10px;
      letter-spacing: 0.5px;
      margin-top: 40px;
    }
    .user-grat {
      font-size: 12px;
      margin-top: 30px;
      color: #292929;
    }
    .message-title {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 13px;
      text-decoration: underline;
      letter-spacing: 0.5px;
      color: #292929;
    }
    .message {
      font-size: 10px;
      letter-spacing: 1px;
      line-height: 1.4;
      color: #292929;
    }
    .footer {
      font-size: 12px;
      margin-top: 30px;
      color: #292929;
    }
    .md-name {
      text-transform: uppercase;
      font-weight: bold;
      margin: 0px;
      color: #292929;
    }
    .md-position {
      margin: 0px;
      margin-top: 10px;
    }
  </style>
  <body>
    <div class="border-top"></div>
    <div class="wrapper">
      <div class="header">
        <img
          src="https://res.cloudinary.com/cavdy/image/upload/v1574199951/om-logo_nxzcfd.jpg"
          alt=""
          class="logo-image"
        />
        <div class="address">
          <p class="address-title">
            OLD MUTUAL NIGERIA LIFE ASSURANCE COMPANY LIMITED
          </p>
          2nd Floor, Ecobank Building, Plot 21 Ahmadu Bello Way<br />
          Victoria Island, Lagos, Nigeria. <br />
          Tel +234 1 271 9393 <br />
          www.oldmutualnigeria.com
        </div>
      </div>
      <div class="sender-address">
        <p class="sender-date">${today}</p>
        <p class="sender-details">
          ${name},<br />
          1 Adikatu Street,<br />
          Mosan Ipaja, Alimosho,<br />
          Lagos State,<br />
          Nigeria.
        </p>
      </div>
      <p class="user-grat">Dear ${name},</p>
      <p class="message-title">
        Acceptance Letter for policy number: 1234566543
      </p>
      <p class="message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        reiciendis suscipit laborum dolorem rerum porro corporis accusamus
        dolores mollitia necessitatibus quo voluptatibus commodi recusandae
        alias nihil tempora exercitationem adipisci delectus maiores similique
        odio deserunt nobis, aspernatur temporibus. Iste soluta neque omnis
        repudiandae fugiat maiores! Debitis dolorum deleniti est maiores
        quos.
      </p>
      <div class="footer">
        <p>Yours sincerely,</p>
        <p>signature</p>
        <p class="md-name">Keith Alford</p>
        <p class="md-position">Managing Director</p>
      </div>
    </div>
  </body>
</html>
  `;
};

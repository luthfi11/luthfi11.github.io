class CertificateSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set certificates(cert) {
    this._certificates = cert;
  }

  render() {
    let certificateElement = '';
    this._certificates.forEach((cert) => {
      certificateElement += `<a href="${cert.link}" rel="noopener" target="_blank">
                            <div class="panel">
                                <div class="panel-header"><b>${cert.course}</b></div> 
                                <div class="panel-body"><img class="lazyload" data-src="${cert.icon}" alt="${cert.publisher}">${cert.publisher}<br><small>${cert.time}</small></div>
                             </div></a>`;
    });
    this.innerHTML = certificateElement;
  }
}

customElements.define('certificate-section', CertificateSection);

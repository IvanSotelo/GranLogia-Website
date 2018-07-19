<template lang="pug">
    footer.footer(role="contentinfo")
      .vertical-align
        .vertical-align__item
          .device-content
            img(src="https://d1rnu9exaqm00k.cloudfront.net/200thAnniv.svg")
            router-link.footer__archive(to="/archive") Archivo
            .footer-nav
              router-link(to="/about") Gran Logia
              router-link(to="/credits") Contacto
</template>

<script>
export default {
  name: 'FooterView'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.is-loaded{
  footer {
      opacity: 1;
  }
}
.is-history{
  a:not(.active),
  p:not(.active){
    color: #000;
  }
  a{
    &:hover{
      color: #978268;
    }    
  }
  img {
      opacity: 0
  }
  @media only screen and (max-width:768px) {
    footer {
      display: none;
    }
  }
}
.footer {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: block;
    text-align: center;
    margin-bottom: 1rem;
    z-index: 3;
    opacity: 0;
    transition: opacity 1.5s cubic-bezier(.19, 1, .22, 1);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    img {
        width: 6.5vw;
        position: absolute;
        left: 0;
        transform: translateY(-50%);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -ms-perspective: 1000;
        perspective: 1000;
        @media only screen and (max-width:768px) {
          width: 12vw
        }
    }

    .footer-nav,
    a,
    p {
        display: inline-block
    }

    p {
        color: #686868;
        position: absolute;
        left: 0;
        right: 0;
        pointer-events: none;
        a {
            color: #3a3a3a;
            &:hover {
                text-decoration: underline
            }
        }
    }

    .footer__archive {
        transition: opacity 1s cubic-bezier(.19, 1, .22, 1);
        text-transform: uppercase;
        position: absolute;
        margin: 0 auto;
        transform: translateX(-70%);
        display: inline-block;
        transition: color 1s cubic-bezier(.19, 1, .22, 1);
        &:hover {
            color: #978268
        }
        @media only screen and (max-width:768px) {
            display: none
        }
    }

    .footer-nav {
        float: right;
        a {
            text-transform: uppercase;
            transition: color 1s cubic-bezier(.19, 1, .22, 1);
            &:not(:last-of-type) {
                padding-right: 3vw
            }
        }
        @media only screen and (max-width:768px) {
          display: none
        }
    }

}
</style>

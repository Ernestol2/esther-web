import logo from '../images/esther-logo.png'

export default function Inicio() {
  return (
    <section className='logo-container'>
        <img className='logo' src={logo} alt="Logo Esther" />
        <p>&quot;En nuestra pastelería encontrarás exquisitas tortas y delicias preparadas con los mejores ingredientes, pero sobre todo hechos con mucho cariño.&quot;</p>
    </section>
  )
}

export default function App(){
  const go = (id) => document.getElementById(id)?.scrollIntoView({behavior:'smooth'})

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400&display=swap');
    *{margin:0;padding:0;box-sizing:border-box}
    .serif{font-family:'Instrument Serif',serif}
    .img-zoom{overflow:hidden}
    .img-zoom img{transition:transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)}
    .img-zoom:hover img{transform:scale(1.08)}
    
    @media(max-width:768px){
      nav{padding:16px 20px !important}
      .hero{flex-direction:column !important; height:auto !important}
      .hero-left{width:100% !important; padding:100px 24px 40px !important}
      .hero-right{width:100% !important; height:60vh !important}
      .hero-right img{height:60vh !important}
      .hero-left h1{font-size:48px !important}
      .about{flex-direction:column !important; padding:60px 24px !important; gap:40px !important}
      .about>div{width:100% !important; padding-top:0 !important}
      .about h2{font-size:40px !important}
      .works{padding:0 24px 60px !important}
      .works-grid{grid-template-columns:1fr !important; gap:32px !important}
      .works-grid img{height:360px !important}
      .contact{flex-direction:column !important; padding:60px 24px !important; gap:40px !important}
      .contact>div{width:100% !important}
      .contact h2{font-size:44px !important}
      .strip{padding:16px 24px !important; font-size:8px !important; flex-direction:column; gap:8px}
    }
  `

  return(
    <div style={{background:'#FBF8F3', color:'#171717', fontFamily:'Inter, sans-serif'}}>
      <style>{css}</style>
      
      <nav style={{position:'fixed', top:0, width:'100%', zIndex:100, display:'flex', justifyContent:'space-between', padding:'26px 56px', mixBlendMode:'difference', color:'white', alignItems:'center'}}>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <div style={{width:38, height:38, border:'1.5px solid white', borderRadius:'50%', display:'grid', placeItems:'center', fontFamily:'serif', fontSize:16}}>S</div>
          <span style={{fontSize:11, letterSpacing:'3px'}}>SRINIDHI</span>
        </div>
        <div style={{display:'flex', gap:24, fontSize:10, letterSpacing:'2px', alignItems:'center'}}>
          <span onClick={()=>go('work')} style={{cursor:'pointer'}}>WORK</span>
          <span onClick={()=>go('contact')} style={{cursor:'pointer', border:'1px solid rgba(255,255,255,0.4)', padding:'10px 18px', borderRadius:20}}>CONTACT</span>
        </div>
      </nav>

      <div className="hero" style={{height:'100vh', display:'flex'}}>
        <div className="hero-left" style={{width:'52%', padding:'0 56px 56px', display:'flex', flexDirection:'column', justifyContent:'center', paddingTop:80}}>
          <p style={{fontSize:10, letterSpacing:'4px', opacity:0.4, marginBottom:24}}>ADILABAD — HYDERABAD</p>
          <h1 className="serif" style={{fontSize:'74px', lineHeight:0.9, fontWeight:400}}>
            Homes built<br/>with heart,<br/>
            <span style={{fontStyle:'italic', color:'#C49A6C'}}>made to last.</span>
          </h1>
          <p style={{fontSize:13, lineHeight:1.7, opacity:0.55, maxWidth:340, marginTop:28}}>200+ families trust Srinidhi. Vaastu perfect. No hidden costs.</p>
          <div onClick={()=>go('work')} style={{marginTop:32, background:'#171717', color:'#FBF8F3', padding:'18px 28px', fontSize:10, letterSpacing:'2px', cursor:'pointer', width:'fit-content'}}>VIEW HOMES →</div>
        </div>
        <div className="hero-right img-zoom" style={{width:'48%', position:'relative'}}>
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop" style={{width:'100%', height:'100vh', objectFit:'cover'}}/>
        </div>
      </div>

      <div className="strip" style={{padding:'20px 56px', display:'flex', justifyContent:'space-between', borderTop:'1px solid #EDE6DC', borderBottom:'1px solid #EDE6DC', fontSize:10, letterSpacing:'2px', opacity:0.4}}>
        <span>VAASU • STRONG RCC • HONEST PRICING</span>
        <span>★ 4.9 RATING • 200+ FAMILIES</span>
      </div>

      <div id="about" className="about" style={{padding:'100px 56px', display:'flex', gap:80}}>
        <div style={{width:'58%'}}>
          <h2 className="serif" style={{fontSize:'56px', lineHeight:0.9, fontWeight:400}}>
            We build <span style={{fontStyle:'italic', color:'#C49A6C'}}>homes where life happens.</span>
          </h2>
          <div style={{marginTop:50, display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
            <div className="img-zoom"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" style={{width:'100%', height:300, objectFit:'cover'}}/></div>
            <div className="img-zoom"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600&auto=format&fit=crop" style={{width:'100%', height:300, objectFit:'cover'}}/></div>
          </div>
        </div>
        <div style={{width:'32%'}}>
          <p style={{fontSize:14, lineHeight:1.8, opacity:0.6}}>We study wind, sun, vaastu before first brick. Every home designed for YOUR family.</p>
          <div style={{marginTop:24, background:'white', padding:20, border:'1px solid #EDE6DC'}}>
            <p className="serif" style={{fontSize:16, fontStyle:'italic'}}>"Build every home like it's your own."</p>
          </div>
        </div>
      </div>

      <div id="work" className="works" style={{padding:'0 56px 80px'}}>
        <h2 className="serif" style={{fontSize:'42px', marginBottom:40, borderTop:'1px solid #EDE6DC', paddingTop:24}}>Selected homes <span style={{fontStyle:'italic', color:'#C49A6C'}}>2020-25</span></h2>
        <div className="works-grid" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'40px 28px'}}>
          <div className="img-zoom">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" style={{width:'100%', height:460, objectFit:'cover', background:'#EDE6DC'}}/>
            <p style={{fontSize:9, letterSpacing:'2px', opacity:0.4, marginTop:10}}>01 ADILABAD</p>
            <p className="serif" style={{fontSize:20, marginTop:4}}>The Courtyard Villa</p>
          </div>
          <div className="img-zoom">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" style={{width:'100%', height:460, objectFit:'cover', background:'#EDE6DC'}}/>
            <p style={{fontSize:9, letterSpacing:'2px', opacity:0.4, marginTop:10}}>02 NIRMAL</p>
            <p className="serif" style={{fontSize:20, marginTop:4}}>Budget Smart Home</p>
          </div>
          <div className="img-zoom">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" style={{width:'100%', height:460, objectFit:'cover', background:'#EDE6DC'}}/>
            <p style={{fontSize:9, letterSpacing:'2px', opacity:0.4, marginTop:10}}>03 HYD</p>
            <p className="serif" style={{fontSize:20, marginTop:4}}>Modern Duplex</p>
          </div>
          <div className="img-zoom">
            <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745b?q=80&w=800&auto=format&fit=crop" style={{width:'100%', height:460, objectFit:'cover', background:'#EDE6DC'}}/>
            <p style={{fontSize:9, letterSpacing:'2px', opacity:0.4, marginTop:10}}>04 FARM</p>
            <p className="serif" style={{fontSize:20, marginTop:4}}>Garden Retreat</p>
          </div>
        </div>
      </div>

      <div id="contact" className="contact" style={{background:'#0F0F0F', color:'#FBF8F3', padding:'80px 56px', display:'flex', justifyContent:'space-between'}}>
        <div>
          <h2 className="serif" style={{fontSize:'56px', lineHeight:0.9}}>Ready to build<br/><span style={{fontStyle:'italic', color:'#C49A6C'}}>with honesty?</span></h2>
        </div>
        <div style={{width:360}}>
          <p style={{fontSize:12, opacity:0.6, lineHeight:1.7}}>Free site visit. No advance for planning. Daily photos.</p>
          <div onClick={()=>window.open('https://wa.me/919999999999')} style={{marginTop:24, background:'#FBF8F3', color:'#0F0F0F', padding:'18px 24px', fontSize:11, letterSpacing:'2px', cursor:'pointer', textAlign:'center'}}>WHATSAPP US →</div>
        </div>
      </div>
    </div>
  )
}
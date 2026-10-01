export default function App(){
  const go = (id) => document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
  return(
    <div style={{background:'#F9F5EF', color:'#1A1A1A', fontFamily:'serif'}}>
      {/* NAV like friend */}
      <div style={{position:'fixed', top:0, width:'100%', zIndex:50, display:'flex', justifyContent:'space-between', padding:'20px 40px', background:'rgba(249,245,239,0.9)', backdropFilter:'blur(10px)', borderBottom:'1px solid #E8DFD3'}}>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <div style={{width:32, height:32, background:'#1A1A1A', color:'#F9F5EF', display:'grid', placeItems:'center', fontSize:12}}>S</div>
          <span style={{fontSize:11, letterSpacing:'3px', fontFamily:'sans-serif'}}>SRINIDHI CONSTRUCTIONS</span>
        </div>
        <div style={{display:'flex', gap:24, fontSize:10, letterSpacing:'2px', fontFamily:'sans-serif', alignItems:'center'}}>
          <span onClick={()=>go('work')} style={{cursor:'pointer'}}>WORK</span>
          <span onClick={()=>go('about')} style={{cursor:'pointer'}}>ABOUT</span>
          <span onClick={()=>go('contact')} style={{cursor:'pointer', background:'#1A1A1A', color:'white', padding:'8px 16px'}}>CONTACT</span>
        </div>
      </div>

      {/* 1. HERO like friend */}
      <div style={{display:'flex', minHeight:'100vh', paddingTop:72}}>
        <div style={{width:'45%', padding:'80px 50px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <h1 style={{fontSize:'56px', lineHeight:0.95, fontWeight:300}}>
            Homes crafted<br/>to inspire,<br/>
            <i style={{color:'#B68B5F', fontWeight:300}}>built to stay.</i>
          </h1>
          <p style={{fontFamily:'sans-serif', fontSize:12, lineHeight:1.8, opacity:0.6, marginTop:24, maxWidth:320}}>Srinidhi Constructions, Adilabad. We build honest, vaastu-perfect homes with strong foundation and beautiful finishing. 200+ families trust us.</p>
          <div onClick={()=>go('work')} style={{marginTop:32, border:'1px solid #1A1A1A', padding:'14px 24px', fontFamily:'sans-serif', fontSize:10, letterSpacing:'2px', width:'fit-content', cursor:'pointer'}}>EXPLORE PROJECTS →</div>
        </div>
        <div style={{width:'55%', position:'relative'}}>
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200" style={{width:'100%', height:'100%', objectFit:'cover', minHeight:'100vh'}}/>
        </div>
      </div>

      {/* 2. GOOD SPACES like friend */}
      <div id="about" style={{display:'flex', padding:'120px 50px', gap:80, background:'#F9F5EF'}}>
        <div style={{width:'55%'}}>
          <h2 style={{fontSize:'56px', lineHeight:0.9, fontWeight:300}}>
            Strong homes make<br/>room for<br/>
            <i style={{color:'#B68B5F'}}>happy life.</i>
          </h2>
          <p style={{marginTop:80, fontFamily:'sans-serif', fontSize:11, letterSpacing:'2px', borderBottom:'1px solid black', width:'fit-content', paddingBottom:8, cursor:'pointer'}} onClick={()=>go('work')}>ABOUT SRINIDHI →</p>
        </div>
        <div style={{width:'35%', paddingTop:20}}>
          <p style={{fontFamily:'sans-serif', fontSize:12, lineHeight:1.9, opacity:0.6}}>We don't just pour concrete. We understand how a family lives - where morning light should come, where children play, where elders sit peacefully. Every Srinidhi home is planned around real life in Telangana heat and heart.</p>
        </div>
      </div>

      {/* 3. BUILT WITH INTENTION - like friend */}
      <div id="work" style={{padding:'0 50px 80px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:50}}>
          <h2 style={{fontSize:'48px', fontWeight:300}}>Built with<br/><i style={{color:'#B68B5F'}}>care & honesty.</i></h2>
          <p style={{fontFamily:'sans-serif', fontSize:10, opacity:0.5, letterSpacing:'1px', maxWidth:280, lineHeight:1.6}}>A collection of homes built for Adilabad & Hyderabad families - strong, beautiful, on-time.</p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:40}}>
          <div>
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800" style={{width:'100%', height:480, objectFit:'cover'}}/>
            <p style={{fontFamily:'sans-serif', fontSize:9, letterSpacing:'2px', opacity:0.4, marginTop:12}}>01 — ADILABAD</p>
            <p style={{fontSize:18, marginTop:6}}>Srinidhi Villa - Sainagar</p>
            <p style={{fontFamily:'sans-serif', fontSize:11, opacity:0.5, marginTop:4}}>3BHK Independent, 1800 sft, Full vaastu</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" style={{width:'100%', height:480, objectFit:'cover'}}/>
            <p style={{fontFamily:'sans-serif', fontSize:9, letterSpacing:'2px', opacity:0.4, marginTop:12}}>02 — HYDERABAD</p>
            <p style={{fontSize:18, marginTop:6}}>Budget Home - Nirmal Road</p>
            <p style={{fontFamily:'sans-serif', fontSize:11, opacity:0.5, marginTop:4}}>2BHK, 1200 sft, Built in 5 months</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800" style={{width:'100%', height:480, objectFit:'cover'}}/>
            <p style={{fontFamily:'sans-serif', fontSize:9, letterSpacing:'2px', opacity:0.4, marginTop:12}}>03 — CONCEPT</p>
            <p style={{fontSize:18, marginTop:6}}>Terracotta Courtyard Villa</p>
            <p style={{fontFamily:'sans-serif', fontSize:11, opacity:0.5, marginTop:4}}>Open courtyard, natural cooling</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745b?w=800" style={{width:'100%', height:480, objectFit:'cover'}}/>
            <p style={{fontFamily:'sans-serif', fontSize:9, letterSpacing:'2px', opacity:0.4, marginTop:12}}>04 — CONCEPT</p>
            <p style={{fontSize:18, marginTop:6}}>Garden House - Modern</p>
            <p style={{fontFamily:'sans-serif', fontSize:11, opacity:0.5, marginTop:4}}>With small garden, kids play area</p>
          </div>
        </div>
      </div>

      {/* 4. LAST like friend - Let's make room */}
      <div id="contact" style={{background:'#F9F5EF', padding:'120px 50px', display:'flex', gap:80, borderTop:'1px solid #E8DFD3'}}>
        <div style={{width:'50%'}}>
          <h2 style={{fontSize:'56px', lineHeight:0.9, fontWeight:300}}>
            Let's make<br/>your dream<br/>
            <i style={{color:'#B68B5F'}}>home real.</i>
          </h2>
          <div style={{marginTop:40, display:'flex', gap:12}}>
            <div onClick={()=>window.open('https://wa.me/919999999999')} style={{background:'#1A1A1A', color:'white', padding:'16px 28px', fontFamily:'sans-serif', fontSize:11, letterSpacing:'2px', cursor:'pointer'}}>WHATSAPP US →</div>
            <div style={{border:'1px solid #1A1A1A', padding:'16px 28px', fontFamily:'sans-serif', fontSize:11, letterSpacing:'2px', cursor:'pointer'}} onClick={()=>go('about')}>SEE PROCESS</div>
          </div>
        </div>
        <div style={{width:'40%', fontFamily:'sans-serif'}}>
          <p style={{fontSize:10, letterSpacing:'3px', opacity:0.4}}>— CONTACT</p>
          <p style={{fontSize:13, lineHeight:1.8, marginTop:16, opacity:0.7}}>Srinidhi Constructions<br/>Adilabad - 504001<br/>+91 99999 99999<br/>srinidhi@email.com</p>
          <p style={{fontSize:11, lineHeight:1.7, opacity:0.5, marginTop:32}}>We give free site visit and estimate. No advance for planning. Come to our office in Adilabad with your plot details.</p>
        </div>
      </div>

      <div style={{background:'#1A1A1A', color:'rgba(255,255,255,0.4)', padding:'20px 50px', display:'flex', justifyContent:'space-between', fontFamily:'sans-serif', fontSize:9, letterSpacing:'2px'}}>
        <span>© 2025 SRINIDHI CONSTRUCTIONS</span>
        <span>ADILABAD • BUILT WITH HONESTY</span>
      </div>
    </div>
  )
}
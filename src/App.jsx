export default function App(){
  const go = (id) => document.getElementById(id)?.scrollIntoView({behavior:'smooth'})

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400&display=swap');
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Inter',sans-serif}
    .serif{font-family:'Instrument Serif',serif}
    .img-zoom{overflow:hidden}
    .img-zoom img{transition:transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)}
    .img-zoom:hover img{transform:scale(1.08)}
  `

  return(
    <div style={{background:'#FBF8F3', color:'#171717'}}>
      <style>{styles}</style>
      
      {/* NAV */}
      <nav style={{position:'fixed', top:0, width:'100%', zIndex:100, display:'flex', justifyContent:'space-between', padding:'26px 56px', mixBlendMode:'difference', color:'white', alignItems:'center'}}>
        <div style={{display:'flex', gap:14, alignItems:'center'}}>
          <div style={{width:38, height:38, border:'1.5px solid white', borderRadius:'50%', display:'grid', placeItems:'center', fontFamily:'serif', fontSize:16}}>S</div>
          <div>
            <div style={{fontSize:12, letterSpacing:'3px', fontWeight:400}}>SRINIDHI</div>
            <div style={{fontSize:8, letterSpacing:'2px', opacity:0.7}}>CONSTRUCTIONS • EST 2010</div>
          </div>
        </div>
        <div style={{display:'flex', gap:36, fontSize:10, letterSpacing:'2.5px', alignItems:'center'}}>
          <span onClick={()=>go('work')} style={{cursor:'pointer', opacity:0.8}}>WORK</span>
          <span onClick={()=>go('about')} style={{cursor:'pointer', opacity:0.8}}>STUDIO</span>
          <span onClick={()=>go('contact')} style={{cursor:'pointer', border:'1px solid rgba(255,255,255,0.4)', padding:'10px 20px', borderRadius:20}}>START PROJECT</span>
        </div>
      </nav>

      {/* HERO - MUCH BETTER */}
      <div style={{height:'100vh', display:'flex', position:'relative'}}>
        <div style={{width:'52%', padding:'0 0 56px', display:'flex', flexDirection:'column', justifyContent:'center', paddingTop:80}}>
          <p style={{fontSize:10, letterSpacing:'4px', opacity:0.4, marginBottom:32}}>ADILABAD — HYDERABAD — TELANGANA</p>
          <h1 className="serif" style={{fontSize:'84px', lineHeight:0.85, fontWeight:400, letterSpacing:'-1px'}}>
            Homes built<br/>with heart,<br/>
            <span style={{fontStyle:'italic', color:'#C49A6C', fontWeight:400}}>made to last.</span>
          </h1>
          <div style={{marginTop:40, display:'flex', gap:20, alignItems:'center'}}>
            <div style={{width:48, height:1, background:'#171717', opacity:0.2}}></div>
            <p style={{fontSize:13, lineHeight:1.7, opacity:0.55, maxWidth:340}}>200+ families in Adilabad trust us. No hidden costs. Vaastu perfect. On-time. We build like it's our own home.</p>
          </div>
          <div style={{marginTop:48, display:'flex', gap:16}}>
            <div onClick={()=>go('work')} style={{background:'#171717', color:'#FBF8F3', padding:'18px 32px', fontSize:10, letterSpacing:'2px', cursor:'pointer', borderRadius:2}}>VIEW HOMES — 200+ BUILT</div>
            <div onClick={()=>go('about')} style={{border:'1px solid #E6DDD0', padding:'18px 28px', fontSize:10, letterSpacing:'2px', cursor:'pointer'}}>OUR PROCESS</div>
          </div>
        </div>
        <div style={{width:'48%', position:'relative'}} className="img-zoom">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400" style={{width:'100%', height:'100vh', objectFit:'cover'}}/>
          <div style={{position:'absolute', bottom:30, left:30, background:'rgba(251,248,243,0.9)', backdropFilter:'blur(12px)', padding:'14px 20px', display:'flex', gap:20}}>
            <div><p style={{fontSize:20}} className="serif">15+</p><p style={{fontSize:8, letterSpacing:'1px', opacity:0.5}}>YEARS</p></div>
            <div style={{width:1, background:'#E6DDD0'}}></div>
            <div><p style={{fontSize:20}} className="serif">200+</p><p style={{fontSize:8, letterSpacing:'1px', opacity:0.5}}>HOMES</p></div>
            <div style={{width:1, background:'#E6DDD0'}}></div>
            <div><p style={{fontSize:20}} className="serif">100%</p><p style={{fontSize:8, letterSpacing:'1px', opacity:0.5}}>TRUST</p></div>
          </div>
        </div>
      </div>

      {/* QUOTE STRIP */}
      <div style={{padding:'40px 56px', display:'flex', justifyContent:'space-between', borderBottom:'1px solid #EDE6DC', borderTop:'1px solid #EDE6DC', fontSize:10, letterSpacing:'3px', opacity:0.4}}>
        <span>VAASU • STRONG RCC • HONEST PRICING • DAILY SITE PHOTOS • ON-TIME DELIVERY</span>
        <span>★ 4.9 RATING FROM 200+ FAMILIES</span>
      </div>

      {/* ABOUT - MUCH BETTER LAYOUT */}
      <div id="about" style={{padding:'140px 56px', display:'flex', gap:100}}>
        <div style={{width:'58%'}}>
          <p style={{fontSize:10, letterSpacing:'4px', opacity:0.4}}>— STUDIO</p>
          <h2 className="serif" style={{fontSize:'68px', lineHeight:0.9, fontWeight:400, marginTop:24}}>
            We don't build<br/>houses.<br/>
            We build <span style={{fontStyle:'italic', color:'#C49A6C'}}>homes where life happens.</span>
          </h2>
          <div style={{marginTop:80, display:'grid', gridTemplateColumns:'1fr 1fr', gap:40}}>
            <div className="img-zoom"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700" style={{width:'100%', height:380, objectFit:'cover'}}/></div>
            <div className="img-zoom"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700" style={{width:'100%', height:380, objectFit:'cover', marginTop:60}}/></div>
          </div>
        </div>
        <div style={{width:'32%', paddingTop:180}}>
          <p style={{fontSize:14, lineHeight:1.9, opacity:0.6}}>In Adilabad heat, a home must breathe. We study wind, sun, vaastu before first brick. No copy-paste plans. Every Srinidhi home is designed for YOUR family - where mother cooks with light, children study in peace, elders rest cool.</p>
          <div style={{marginTop:40, padding:'24px', background:'white', border:'1px solid #EDE6DC'}}>
            <p style={{fontSize:10, letterSpacing:'2px', opacity:0.4, marginBottom:12}}>FOUNDER'S NOTE</p>
            <p className="serif" style={{fontSize:18, lineHeight:1.4, fontStyle:'italic'}}>"Build every home like it's your own. That's the only rule my father gave. We still follow it."</p>
          </div>
          <div style={{marginTop:32}}>
            <p style={{fontSize:10, letterSpacing:'2px', opacity:0.4, marginBottom:16}}>SERVICES</p>
            {['Residential • Villas • Duplex', 'Commercial • Shops', 'Renovation • Interiors'].map(t=><p key={t} style={{fontSize:12, padding:'10px 0', borderBottom:'1px solid #EDE6DC', opacity:0.7}}>• {t}</p>)}
          </div>
        </div>
      </div>

      {/* WORKS - PREMIUM GRID */}
      <div id="work" style={{padding:'0 56px 100px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:60, paddingTop:40, borderTop:'1px solid #EDE6DC'}}>
          <h2 className="serif" style={{fontSize:'48px', fontWeight:400}}>Selected homes<br/><span style={{fontStyle:'italic', color:'#C49A6C'}}>2020 — 2025</span></h2>
          <p style={{fontSize:11, opacity:0.5, maxWidth:280, lineHeight:1.6, textAlign:'right'}}>All homes built in Adilabad & Hyderabad. Real photos, real families. No 3D renders.</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'56px 32px'}}>
          {[
            {n:'01', loc:'SAINAGAR, ADILABAD', name:'The Courtyard Villa', d:'1800 sft • 3BHK • Open courtyard for air', img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'},
            {n:'02', loc:'NIRMAL ROAD', name:'Budget Smart Home', d:'1200 sft • 2BHK • Built in 4.5 months', img:'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800'},
            {n:'03', loc:'HYDERABAD', name:'Modern Duplex', d:'2400 sft • 4BHK • Terrace garden', img:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800'},
            {n:'04', loc:'ADILABAD FARM', name:'Garden Retreat', d:'2000 sft • Farmhouse • Natural stone', img:'https://images.unsplash.com/photo-1600573472550-8090b5e0745b?w=800'},
          ].map(i=>(
            <div key={i.n} className="img-zoom" style={{cursor:'pointer'}}>
              <img src={i.img} style={{width:'100%', height:560, objectFit:'cover'}}/>
              <div style={{display:'flex', justifyContent:'space-between', marginTop:16}}>
                <div>
                  <p style={{fontSize:9, letterSpacing:'2px', opacity:0.4}}>{i.n} — {i.loc}</p>
                  <p className="serif" style={{fontSize:22, marginTop:6}}>{i.name}</p>
                  <p style={{fontSize:11, opacity:0.5, marginTop:4}}>{i.d}</p>
                </div>
                <div style={{width:32, height:32, border:'1px solid #E6DDD0', borderRadius:'50%', display:'grid', placeItems:'center', fontSize:14}}>↗</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLACK CTA - MUCH MORE LUXURY */}
      <div id="contact" style={{background:'#0F0F0F', color:'#FBF8F3', padding:'120px 56px', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', top:-100, right:-100, width:600, height:600, background:'radial-gradient(circle, rgba(196,154,108,0.15), transparent 70%)', borderRadius:'50%'}}></div>
        <div style={{position:'relative', zIndex:2, display:'flex', justifyContent:'space-between'}}>
          <div>
            <p style={{fontSize:10, letterSpacing:'4px', opacity:0.4, marginBottom:24}}>— LET'S BUILD</p>
            <h2 className="serif" style={{fontSize:'72px', lineHeight:0.85, fontWeight:400}}>
              Ready to build<br/>your dream<br/>
              <span style={{fontStyle:'italic', color:'#C49A6C'}}>with honesty?</span>
            </h2>
          </div>
          <div style={{width:380, paddingTop:20}}>
            <p style={{fontSize:13, lineHeight:1.8, opacity:0.6}}>No advance for planning. Free site visit in Adilabad. We show you daily progress photos. Full bill transparency.</p>
            <div style={{marginTop:36}}>
              <div onClick={()=>window.open('https://wa.me/919999999999')} style={{background:'#FBF8F3', color:'#0F0F0F', padding:'20px 32px', fontSize:11, letterSpacing:'2px', cursor:'pointer', display:'flex', justifyContent:'space-between'}}>
                <span>WHATSAPP US NOW</span><span>→</span>
              </div>
              <p style={{fontSize:10, opacity:0.4, marginTop:16, letterSpacing:'1px'}}>SRINIDHI CONSTRUCTIONS • ADILABAD • +91 99999 99999 • srinidhi@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
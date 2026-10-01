export default function App(){
  return(
    <div style={{background:'#F6F1EB', color:'#1A1A1A'}}>
      {/* NAVBAR - Srinidhi style */}
      <div style={{display:'flex', justifyContent:'space-between', padding:'20px 60px', position:'fixed', top:0, width:'100%', zIndex:50, mixBlendMode:'difference', color:'white'}}>
        <b>SRINIDHI CONSTRUCTIONS</b>
        <span>Adilabad • Hyderabad</span>
      </div>

      {/* HERO - Your own */}
      <div style={{height:'100vh', position:'relative'}}>
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}/>
        <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.4)'}}></div>
        <div style={{position:'relative', zIndex:5, height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 80px'}}>
          <h1 style={{color:'white', fontSize:'80px', lineHeight:'0.9', fontFamily:'serif'}}>
            Building <br/> Hyderabad's <br/>
            <i style={{color:'#E8C9A0', fontWeight:400}}>Finest Homes.</i>
          </h1>
          <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'400px', marginTop:'30px', lineHeight:1.6}}>
            Srinidhi Constructions - 15+ years of trusted construction in Telangana. From foundation to finishing, we build with honesty.
          </p>
          <div style={{background:'#F6F1EB', padding:'16px 32px', width:'fit-content', marginTop:'30px', fontSize:'12px', letterSpacing:'2px'}}>
            VIEW OUR WORKS →
          </div>
        </div>
      </div>

      {/* WHY US - Different from friend */}
      <div style={{padding:'100px 80px', display:'flex', gap:'80px'}}>
        <div style={{flex:1}}>
          <p style={{fontSize:'10px', letterSpacing:'3px', opacity:0.5}}>— WHY SRINIDHI</p>
          <h2 style={{fontSize:'60px', fontFamily:'serif', marginTop:'20px', lineHeight:1}}>
            Not just <br/> construction, <br/>
            <i style={{color:'#9C6B4A'}}>craftsmanship.</i>
          </h2>
        </div>
        <div style={{width:'380px', paddingTop:'80px'}}>
          <p style={{opacity:0.6, lineHeight:1.8, fontSize:'14px'}}>
            Unlike others, we don't just build walls. Every Srinidhi home has proper vaastu, strong foundation, premium materials and on-time delivery. That's why 200+ families in Adilabad & Hyderabad trust us.
          </p>
          <div style={{marginTop:'40px', borderTop:'1px solid #ddd', paddingTop:'20px', display:'flex', gap:'40px'}}>
            <div><h3 style={{fontSize:'28px', fontFamily:'serif'}}>200+</h3><p style={{fontSize:'10px', opacity:0.5}}>HOMES</p></div>
            <div><h3 style={{fontSize:'28px', fontFamily:'serif'}}>15+</h3><p style={{fontSize:'10px', opacity:0.5}}>YEARS</p></div>
            <div><h3 style={{fontSize:'28px', fontFamily:'serif'}}>100%</h3><p style={{fontSize:'10px', opacity:0.5}}>TRUSTED</p></div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{background:'#111', color:'#F6F1EB', padding:'60px 80px', textAlign:'center'}}>
        <h2 style={{fontFamily:'serif', fontSize:'40px'}}>Ready to build your dream home?</h2>
        <p style={{opacity:0.6, marginTop:'10px'}}>Call Srinidhi Constructions - Adilabad</p>
      </div>
    </div>
  )
}
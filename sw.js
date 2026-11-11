/* Alcancía: solo atiende las direcciones /__cal/*.ics, para entregar eventos de calendario con el tipo correcto. */
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
  var u=new URL(e.request.url);
  if(u.pathname.indexOf('/__cal/')<0)return;
  var d=u.searchParams.get('d');
  if(!d){e.respondWith(new Response('Falta el evento',{status:400}));return}
  try{
    var b=atob(d.replace(/-/g,'+').replace(/_/g,'/')),bytes=new Uint8Array(b.length);
    for(var i=0;i<b.length;i++)bytes[i]=b.charCodeAt(i);
    var name=decodeURIComponent(u.pathname.split('/').pop()||'evento.ics');
    e.respondWith(new Response(bytes,{status:200,headers:{'Content-Type':'text/calendar; charset=utf-8','Content-Disposition':'inline; filename="'+name.replace(/"/g,'')+'"','Cache-Control':'no-store'}}));
  }catch(err){e.respondWith(new Response('Evento inválido',{status:400}))}
});

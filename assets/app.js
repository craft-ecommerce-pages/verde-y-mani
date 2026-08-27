    (()=>{
      const branches=[
        {
          name:'Sucursal Capelo',
          map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7570531552333!2d-78.4595148!3d-0.3175233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bda709939277%3A0x285ed95f5adfe535!2sVERDE%20Y%20MANI%20CAPELO!5e0!3m2!1ses-419!2sec!4v1787612854418!5m2!1ses-419!2sec'
        },
        {
          name:'Sucursal Sangolquí',
          map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7516129775313!2d-78.4465915!3d-0.33132069999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bdddae016ef5%3A0xd76da6eeec7c0344!2sVERDE%20Y%20MANI%20SANGOLQUI!5e0!3m2!1ses-419!2sec!4v1787612893029!5m2!1ses-419!2sec'
        }
      ];

      function renderBranchMaps(){
        const wrap=document.querySelector('.location-view-wrap');
        if(!wrap) return;
        const heading=wrap.querySelector('.location-heading');
        if(heading) heading.innerHTML='<h2>📍 Nuestras sucursales</h2><p>Visítanos en Capelo o Sangolquí y disfruta el auténtico sabor de la costa.</p>';
        wrap.querySelector('.location-map')?.remove();
        const grid=wrap.querySelector('.branch-map-grid')||document.createElement('div');
        grid.className='branch-map-grid';
        grid.innerHTML=branches.map(branch=>`<article class="branch-map-card"><h3>${branch.name}</h3><iframe src="${branch.map}" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="Mapa de ${branch.name}"></iframe></article>`).join('');
        if(!grid.isConnected) wrap.querySelector('.sedes-grid')?.after(grid);
      }

      document.addEventListener('click',event=>{
        if(event.target.closest('[data-nav="location"]')) setTimeout(renderBranchMaps,0);
      });
    })();

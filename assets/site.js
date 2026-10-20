const publications = [
 {year:2025,type:'single',title:'Spatiotemporal single-cell roadmap of human skin wound healing',authors:'Liu Z, Bian X, Luo L, Björklund ÅK, Li L, Zhang L, Chen Y, et al.',journal:'Cell Stem Cell · 32(3):479–498.e8',featured:true},
 {year:2025,type:'rna',title:'Collaborative Duality of CircGLIS3(2) RNA and Protein in human Wound Repair',authors:'Niu G, Toma MA, Geara J, et al., Liu Z, et al.',journal:'Advanced Science · e2416784'},
 {year:2024,type:'rna',title:'The lncRNA SNHG26 drives the inflammatory-to-proliferative state transition of keratinocyte progenitor cells during wound healing',authors:'Li D, Liu Z, Zhang L, Bian X, et al.',journal:'Nature Communications · 15:8637'},
 {year:2024,type:'single',title:'Epigenetic memory of radiotherapy in dermal fibroblasts impairs wound repair capacity in cancer survivors',authors:'Bian X*, Piipponen M*, Liu Z, et al.',journal:'Nature Communications · 15:9286'},
 {year:2024,type:'single',title:'Single-cell transcriptomic analysis identifies infiltrating plasmacytoid dendritic cells in psoriasis epidermis',authors:'Luo L*, Cheng H*, Liu Z, et al.',journal:'British Journal of Dermatology'},
 {year:2023,type:'rna',title:'Human skin specific long noncoding RNA HOXC13-AS regulates epidermal differentiation by interfering with Golgi-ER retrograde transport',authors:'Zhang L, Piipponen M, Liu Z, et al.',journal:'Cell Death & Differentiation · 30:1334–1348'},
 {year:2022,type:'rna',title:'Integrative small and long RNA omics analysis of human healing and nonhealing wounds discovers cooperating microRNAs as therapeutic targets',authors:'Liu Z*, Zhang L*, Toma MA, Li D, et al.',journal:'eLife · 11:e80322',url:'https://doi.org/10.7554/eLife.80322'},
 {year:2022,type:'rna',title:'Circular RNA Signatures of Human Healing and Nonhealing Wounds',authors:'Toma MA*, Liu Z*†, Wang Q, Zhang L, et al.',journal:'Journal of Investigative Dermatology'},
 {year:2022,type:'single',title:'Single-Cell Analysis Reveals Major Histocompatibility Complex II–Expressing Keratinocytes in Pressure Ulcers with Worse Healing Outcomes',authors:'Li D, Cheng S, Pei Y, et al., Liu Z, et al.',journal:'Journal of Investigative Dermatology · 142:705–716'},
 {year:2021,type:'genetics',title:'Design and evaluation of a custom 50K Infinium SNP array for egg-type chickens',authors:'Liu Z, et al.',journal:'Poultry Science · 100:101044'},
 {year:2019,type:'genetics',title:'Genome-wide association analysis of egg production performance in chickens across the whole laying period',authors:'Liu Z, et al.',journal:'BMC Genetics · 20:67'},
 {year:2018,type:'genetics',title:'Genome-Wide Association Analysis of Age-Dependent Egg Weights in Chickens',authors:'Liu Z, et al.',journal:'Frontiers in Genetics · 9:128'},
 {year:2018,type:'genetics',title:'Genetic variations for egg quality of chickens at late laying period revealed by genome-wide association study',authors:'Liu Z, et al.',journal:'Scientific Reports · 8:10832'},
 {year:2016,type:'genetics',title:'Genome-Wide Detection of Selective Signatures in Chicken through High Density SNPs',authors:'Liu Z, et al.',journal:'PLOS ONE · 11:e0166146',url:'https://doi.org/10.1371/journal.pone.0166146'}
];
const list=document.getElementById('publication-list');
function render(filter='all'){
 list.replaceChildren(...publications.filter(p=>filter==='all'||p.type===filter).map(p=>{
 const article=document.createElement('article'); article.className='publication';
 const year=document.createElement('span');year.className='pub-year';year.textContent=p.year;
 const link=document.createElement('a');link.href=p.url||'https://scholar.google.com/scholar?q='+encodeURIComponent(p.title);link.target='_blank';link.rel='noopener';
 const title=document.createElement('h3');title.textContent=p.title;
 const authors=document.createElement('p');authors.textContent=p.authors;
 const journal=document.createElement('p');journal.className='journal';journal.textContent=p.journal;
 link.append(title,authors,journal);
 const arrow=document.createElement('span');arrow.className='pub-arrow';arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');
 article.append(year,link,arrow);return article;
 }));
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render(button.dataset.filter);
}));
render();document.getElementById('year').textContent=new Date().getFullYear();

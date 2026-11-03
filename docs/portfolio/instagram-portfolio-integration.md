# Instagram portfolio integration

## Method & limits
Profiles were opened as a normal logged-out visitor on 2026-11-04. All nine were publicly readable (bio, follower count, recent post links). Nothing was scraped behind a login, no video streams were extracted, and no media was downloaded. **Instagram does not show which posts AEON produced, and some listed posts come from other accounts (collaborator/tagged), so no post is showcased as AEON's work yet.** MSTTUDIO was supplied twice with tracking parameters and is one entry.

## Brands (9)
| Brand | Profile | Category (evidence) | Followers |
|---|---|---|---|
| MSTTUDIO | https://www.instagram.com/msttudio_/ | Architecture & Interiors — bio: 'Luxury Design Studio · Interior Designer · Stylist · Vastu Consultant', Mumbai | 3,074 |
| Kavish Shah Architects | https://www.instagram.com/kavish_shah_architects/ | Architecture & Interiors — bio: 'Architecture | Interior Design | Consultancy', Mumbai | 1,170 |
| De.Sifr Studio | https://www.instagram.com/de.sifrstudio/ | Architecture & Interiors — bio: 'design dialogues, offbeat Architectural & Design solutions' | 3,818 |
| Modern Ceramics | https://www.instagram.com/modernceramics/ | Architecture & Interiors — bio: wall coverings, tiles, mosaics, bath fittings, sanitaryware | 30.2k |
| Roopshree Jewellery | https://www.instagram.com/roopshreejewellery/ | Jewellery — bio: 'THE POLKI DESTINATION', Navi Mumbai | 7,810 |
| Vedas Homes | https://www.instagram.com/vedashomes/ | Fashion & Lifestyle — bio: handcrafted home décor | 56.4k |
| Derma Villa | https://www.instagram.com/dermavilla01/ | Healthcare & Wellness — bio: 'Luxury Skin & Hair Clinic', Chembur | 37.5k |
| Two Brothers India Farms | https://www.instagram.com/twobrothersindiafarms/ | Food & Agriculture — bio: 'A Soil-First Food Co. Led By Farmers' | 454k |
| Capapie Sports Equipment | https://www.instagram.com/capapiesportsequipmentpvtltd/ | Sports & Equipment — bio: 'Engineered for Olympic rifle & pistol shooting' | 11.2k |

## Embed implementation
`InstagramEmbed` (thumbnail-first; the official `instagram.com/{p|reel}/CODE/embed/` iframe loads only after Play; no Instagram script; link to original post; fallback text if the URL is invalid). Verified with one public Reel at 390px (350×622, 9:16, no overflow) using temporary test data that was removed. Add work by appending to a project's `media` in `src/data/projects.ts`.

## Routes
`/work/` (filters: only categories with projects) and `/work/{msttudio, kavish-shah-architects, de-sifr-studio, modern-ceramics, roopshree-jewellery, vedas-homes, derma-villa, two-brothers-india-farms, capapie-sports-equipment}/` with previous/next. Pages with no confirmed media are `noindex` and excluded from the sitemap.

## Candidate posts (from each brand's own account; NOT confirmed as AEON's) — please tell me which are yours
- **MSTTUDIO**: https://www.instagram.com/reel/DegwA5Aov72/, https://www.instagram.com/reel/DeQgIxToehk/, https://www.instagram.com/reel/DeHNDJEB9uT/, https://www.instagram.com/p/Dd82w7tiFaH/
- **Kavish Shah Architects**: https://www.instagram.com/reel/DeCC7-JoJBf/, https://www.instagram.com/reel/DcyYlLIt9v8/, https://www.instagram.com/p/DcoDW1MhPtS/
- **De.Sifr Studio**: https://www.instagram.com/p/DYjwewLCTb0/, https://www.instagram.com/p/DfHFO6eDZ3o/, https://www.instagram.com/reel/DeHNsGIvjQt/
- **Modern Ceramics**: https://www.instagram.com/reel/DfO3QchO7JU/, https://www.instagram.com/reel/DfJq0n_uwxO/, https://www.instagram.com/p/DfHDdVpF0t_/
- **Roopshree Jewellery**: https://www.instagram.com/reel/DfPiNt9O0vu/, https://www.instagram.com/reel/DfH1m87OjMZ/, https://www.instagram.com/p/DfE2Hn-DroC/
- **Vedas Homes**: https://www.instagram.com/reel/De85yZwyGet/, https://www.instagram.com/reel/De1YXuVSzwl/, https://www.instagram.com/reel/Dedw_bLiPI6/
- **Derma Villa**: https://www.instagram.com/reel/DfCbN2bo0Uq/, https://www.instagram.com/reel/De824BBxtNO/, https://www.instagram.com/p/DewU2o8ILyF/
- **Two Brothers India Farms**: https://www.instagram.com/reel/DeyhIcvKXqH/, https://www.instagram.com/reel/De3lGmgKqbT/, https://www.instagram.com/reel/DewCA75KOlu/
- **Capapie Sports Equipment**: https://www.instagram.com/p/DfPnuMcI66q/, https://www.instagram.com/p/DfL_AKzDBUs/, https://www.instagram.com/reel/DfG1b04EcPz/

## Still needed from you
The individual post/Reel URLs that are AEON's work, per brand; any cover images you own the rights to; what AEON delivered for each brand (so summaries can say more than the bio).

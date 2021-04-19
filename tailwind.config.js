module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mc1: "rgba(0, 53, 80, 1)",
        mc2: "rgba(0, 62, 102, 0.8)",
        mc3: "rgba(0, 86, 129, 1)",
        nc1: "rgba(0, 98, 174, 1)",
        nc2: "rgba(0, 151, 217, 1)",
        nc3: "rgba(174, 222, 248, 1)",
      },
      backgroundImage: theme => ({
        'one-texture': "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6391f2d9-5b78-46f5-ae0a-04504b81713a/deh77hd-8086e02e-d465-4355-8a82-c31758f5fcd1.png/v1/fill/w_885,h_903,q_70,strp/king_of_the_sky_by_fuzzymaro_deh77hd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDIxIiwicGF0aCI6IlwvZlwvNjM5MWYyZDktNWI3OC00NmY1LWFlMGEtMDQ1MDRiODE3MTNhXC9kZWg3N2hkLTgwODZlMDJlLWQ0NjUtNDM1NS04YTgyLWMzMTc1OGY1ZmNkMS5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7e6_NkvJ2FWJinPyrqIWKltbIh-ZXUvPi8fzPf-rLHA')",
        'two-texture': "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40f10427-2b55-4cc7-98d5-b8b243f2f878/dedqujf-c2709f8d-c8e6-426d-b8e7-1add98ddc2c5.jpg/v1/fill/w_1280,h_657,q_75,strp/in_the_clouds_by_wiachko_dedqujf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NTciLCJwYXRoIjoiXC9mXC80MGYxMDQyNy0yYjU1LTRjYzctOThkNS1iOGIyNDNmMmY4NzhcL2RlZHF1amYtYzI3MDlmOGQtYzhlNi00MjZkLWI4ZTctMWFkZDk4ZGRjMmM1LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ntcTqfcgchnycst0B73ifUO67KPY_F9XLLSD3CNN7EY')",
        'three-texture': "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b19eaca-3d5b-429c-8725-0539d5300693/deh94rs-e0a264b6-bdd4-446e-97eb-a825c5744d3c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWIxOWVhY2EtM2Q1Yi00MjljLTg3MjUtMDUzOWQ1MzAwNjkzXC9kZWg5NHJzLWUwYTI2NGI2LWJkZDQtNDQ2ZS05N2ViLWE4MjVjNTc0NGQzYy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gDnvD6BHC6MREq26RPeFfWOlwEODjMTR7oCY1wItfDk')",
        'four-texture': "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d139bc3-0b52-4f89-b343-4cda4ea08cf1/deewohu-209c2ff3-4421-4802-877d-4089cd280be3.jpg/v1/fill/w_1600,h_755,q_75,strp/seconds_to_ignition_by_brissinge_deewohu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NTUiLCJwYXRoIjoiXC9mXC84ZDEzOWJjMy0wYjUyLTRmODktYjM0My00Y2RhNGVhMDhjZjFcL2RlZXdvaHUtMjA5YzJmZjMtNDQyMS00ODAyLTg3N2QtNDA4OWNkMjgwYmUzLmpwZyIsIndpZHRoIjoiPD0xNjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.nulgSk3IjsFpFNqi013uGewwEpTGyeNNmNxqSrsecXw')",
        // 'two-texture': "url('')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

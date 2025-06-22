--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4 (Debian 16.4-1.pgdg120+1)
-- Dumped by pg_dump version 16.4 (Debian 16.4-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: added_Products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."added_Products" (
    id integer NOT NULL,
    product_name text NOT NULL,
    product_photo text NOT NULL,
    crossed_out text NOT NULL,
    product_amount integer[],
    product_price integer[],
    result integer[]
);


ALTER TABLE public."added_Products" OWNER TO postgres;

--
-- Name: crossedOutProduct; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."crossedOutProduct" (
    id integer NOT NULL,
    product_name text NOT NULL,
    product_photo text NOT NULL,
    crossed_out text NOT NULL,
    product_amount integer[],
    product_price integer[],
    result integer[]
);


ALTER TABLE public."crossedOutProduct" OWNER TO postgres;

--
-- Name: supermarket_list_db; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.supermarket_list_db (
    id integer NOT NULL,
    product_name text NOT NULL,
    product_photo text NOT NULL,
    product_amount integer NOT NULL,
    product_price integer NOT NULL
);


ALTER TABLE public.supermarket_list_db OWNER TO postgres;

--
-- Name: supermarket_list_db_id_seq; Type: SEQUENCE; Schema: public; postgres: 
--

CREATE SEQUENCE public.supermarket_list_db_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.supermarket_list_db_id_seq OWNER TO postgres;

--
-- Name: supermarket_list_db_id_seq; Type: SEQUENCE OWNED BY; Schema: public; postgres: 
--

ALTER SEQUENCE public.supermarket_list_db_id_seq OWNED BY public.supermarket_list_db.id;


--
-- Name: supermarket_list_db id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supermarket_list_db ALTER COLUMN id SET DEFAULT nextval('public.supermarket_list_db_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
d54ddd06-7a4f-46ea-afa1-3383cc8b0ccc	dac1980da4e28a8bd750105bd0f8b9e650a159b33a61f5045cbb383c18c9ec98	2025-05-16 03:05:46.444217+00	20250516030546_	\N	\N	2025-05-16 03:05:46.359938+00	1
ee3ca4cc-a0e7-4600-8459-0f05c299c8ca	58a65ed90976619abafd7e2b40d5a1ed4f8d8f79041a32853078535599beb3b3	2025-06-19 18:57:28.956488+00	20250619185728_update_model_added_products_and_crossed_out_product	\N	\N	2025-06-19 18:57:28.809946+00	1
\.


--
-- Data for Name: added_Products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."added_Products" (id, product_name, product_photo, crossed_out, product_amount, product_price, result) FROM stdin;
123	Desodorante en aerosol	https://i.ibb.co/LhQwbpQg/desodorante-aerosol.webp	not-crossed-out	{0,1}	{0,1}	{0,1}
101	Shampoo	https://i.ibb.co/gbF03ppH/shampoo.jpg	not-crossed-out	{0,1}	{0,1}	{0,1}
10	Sal	https://i.ibb.co/TDV1pysh/sal.jpg	not-crossed-out	{0,4}	{0,4}	{0,16}
2	Atun de lata entero	https://i.ibb.co/sdCSYyq1/atun-de-lata-entero.png	not-crossed-out	{0,2}	{0,2}	{0,4}
112	Soflan	https://i.ibb.co/q37H7pb7/soflan.png	not-crossed-out	{0,4}	{0,3}	{0,12}
150	Salsa roja	https://i.ibb.co/B2Cn4jyg/Salsa-roja.png	not-crossed-out	{0,1}	{0,1}	{0,1}
145	Servilleta	https://i.ibb.co/fYFDxPc2/servilleta.png	not-crossed-out	{0,2}	{0,2}	{0,4}
\.


--
-- Data for Name: crossedOutProduct; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."crossedOutProduct" (id, product_name, product_photo, crossed_out, product_amount, product_price, result) FROM stdin;
101	Shampoo	https://i.ibb.co/gbF03ppH/shampoo.jpg	not-crossed-out	{0,1}	{0,1}	{0,1}
10	Sal	https://i.ibb.co/TDV1pysh/sal.jpg	not-crossed-out	{0,4}	{0,4}	{0,16}
2	Atun de lata entero	https://i.ibb.co/sdCSYyq1/atun-de-lata-entero.png	not-crossed-out	{0,2}	{0,2}	{0,4}
112	Soflan	https://i.ibb.co/q37H7pb7/soflan.png	not-crossed-out	{0,4}	{0,3}	{0,12}
150	Salsa roja	https://i.ibb.co/B2Cn4jyg/Salsa-roja.png	not-crossed-out	{0,1}	{0,1}	{0,1}
145	Servilleta	https://i.ibb.co/fYFDxPc2/servilleta.png	not-crossed-out	{0,2}	{0,2}	{0,4}
123	Desodorante en aerosol	https://i.ibb.co/LhQwbpQg/desodorante-aerosol.webp	not-crossed-out	{0,1}	{0,1}	{0,1}
\.


--
-- Data for Name: supermarket_list_db; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.supermarket_list_db (id, product_name, product_photo, product_amount, product_price) FROM stdin;
1	Manzana	https://i.ibb.co/Vpky4rZf/manzana.jpg	0	0
2	Atun de lata entero	https://i.ibb.co/sdCSYyq1/atun-de-lata-entero.png	0	0
3	Atun de lata rayado	https://i.ibb.co/nMt8R9sL/atun-de-lata-rayado.jpg	0	0
4	Pera	https://i.ibb.co/0pfNRV7f/pera.jpg	0	0
5	Aceite de oliva	https://i.ibb.co/nM3qH16j/aceite-de-oliva.jpg	0	0
6	Queso costeño	https://i.ibb.co/vyH1Qx3/queso-campesino.jpg	0	0
7	Queso campesino	https://i.ibb.co/vyH1Qx3/queso-campesino.jpg	0	0
8	Queso tajado	https://i.ibb.co/60kNjRQJ/queso-tajado.webp	0	0
9	Azucar	https://i.ibb.co/gbwhSjdy/azucar.png	0	0
10	Sal	https://i.ibb.co/TDV1pysh/sal.jpg	0	0
11	Frijol	https://i.ibb.co/7x3k8pk6/frijol.jpg	0	0
12	Mantequilla	https://i.ibb.co/Swx36pWy/mantequilla.jpg	0	0
13	Leche liquida	https://i.ibb.co/N2kSB0zr/leche-liquida.jpg	0	0
14	Leche en polvo	https://i.ibb.co/mgd2wyT/leche-en-polvo.png	0	0
15	Uva	https://i.ibb.co/ccMzDwfQ/uva.jpg	0	0
16	Fresa	https://i.ibb.co/WvBsJnG9/fresa.jpg	0	0
17	Aguacate	https://i.ibb.co/Zp3Vtbm9/aguacate.jpg	0	0
18	Aceite vegetal	https://i.ibb.co/0pFsfFMy/aceite-vegetal.jpg	0	0
19	Cafe	https://i.ibb.co/jYfsLMg/cafe.jpg	0	0
20	Cafe en grano	https://i.ibb.co/mVSGVQCq/cafe.jpg	0	0
22	Kiwi	https://i.ibb.co/2YgZdkCr/kiwi.jpg	0	0
23	Zapallo	https://i.ibb.co/DDy7PGsx/zapallo.jpg	0	0
24	Acondicionador para el cabello	https://i.ibb.co/7JfK7Hb5/acondicionar-para-el-cabello.png	0	0
25	Ajo en polvo	https://i.ibb.co/S7s6xjbB/ajo-en-polvo.webp	0	0
26	Ajo	https://i.ibb.co/gFT1kQjC/ajo-entero.jpg	0	0
27	Alcohol	https://i.ibb.co/7JghxNQW/alcohol.jpg	0	0
28	Alimento para gatos	https://i.ibb.co/zHBpsLjz/alimento-para-gatos.jpg	0	0
29	Ambientador	https://i.ibb.co/KpRdpVL4/ambientador.webp	0	0
30	Arracacha	https://i.ibb.co/6cTZ9dnj/arracacha.jpg	0	0
31	Arveja	https://i.ibb.co/Fk6sDpmq/arveja.jpg	0	0
32	Avena	https://i.ibb.co/pjSVyBr8/avena-en-hojuelas.jpg	0	0
33	Avena en polvo	https://i.ibb.co/FM2s4tw/avena-en-polvo.jpg	0	0
34	Banano	https://i.ibb.co/NgxWncdm/banano.png	0	0
35	Batavia	https://i.ibb.co/yF8Ns5mm/batavia.jpg	0	0
36	Lechuga	https://i.ibb.co/yF8Ns5mm/batavia.jpg	0	0
37	Brocoli	https://i.ibb.co/WW3xNFHt/brocoli.jpg	0	0
38	Carne de cerdo	https://i.ibb.co/nq11z2x6/carne-de-cerdo.jpg	0	0
39	Carne de res	https://i.ibb.co/R1jDqQy/carne-de-res.jpg	0	0
40	Cebolla cabezona blanca	https://i.ibb.co/5hPDKyyY/cebolla-cabezona-blanca.webp	0	0
41	Cebolla cabezona morada	https://i.ibb.co/1t6VJD4G/Cebolla-Cabezona-Roja.jpg	0	0
42	Cebolla larga	https://i.ibb.co/fYjfNV4m/cebolla-larga.webp	0	0
43	Chocoramo	https://i.ibb.co/zTKb0td2/chocoramo.png	0	0
44	Cilantro	https://i.ibb.co/35FP3tQL/cilantro.webp	0	0
45	Cloro	https://i.ibb.co/RGQydsVm/cloro.jpg	0	0
46	Coliflor	https://i.ibb.co/F4ppV8g1/coliflor.png	0	0
47	Comino molido	https://i.ibb.co/wNSyY673/comino-molido.png	0	0
48	Crema de dientes	https://i.ibb.co/fVgW52Cq/crema-de-dientes.jpg	0	0
49	Crema de peinar	https://i.ibb.co/ZpyyJV5v/crema-de-peinar.jpg	0	0
50	Cucas	https://i.ibb.co/yFhK36wN/cucas.jpg	0	0
51	Cuchilla dorco	https://i.ibb.co/VpNB1NtH/cuchilla-dorco.jpg	0	0
52	Desodorante	https://i.ibb.co/VcvDbvVR/desodorante.jpg	0	0
53	Esponja de lavaplatos	https://i.ibb.co/C5f7sJhQ/esponja-lavaplatos.jpg	0	0
54	Frijol caraota	https://i.ibb.co/PZhzhx4Y/frijol-caraota.jpg	0	0
55	Galleta ducales	https://i.ibb.co/hJjDCdK5/galleta-ducales.jpg	0	0
56	Galleta integral	https://i.ibb.co/wFkFtkHy/galleta-integral.jpg	0	0
57	Galleta saltin	https://i.ibb.co/Df1N9Vt2/galleta-saltin.png	0	0
58	Garbanzo	https://i.ibb.co/1Yz2YF2S/garbanzo.jpg	0	0
59	Guineo	https://i.ibb.co/35zMYjcV/guineo.png	0	0
60	Habichuela	https://i.ibb.co/5xLrC4sC/habichuela.jpg	0	0
61	Harina de trigo	https://i.ibb.co/8DFpPPX4/harina-de-trigo.jpg	0	0
62	Harina pan	https://i.ibb.co/KcBfsrq2/harina-pan.png	0	0
63	Hoja de laurel	https://i.ibb.co/Jjk0qycP/hoja-de-laurel.jpg	0	0
64	Huevos	https://i.ibb.co/xtJSRkvY/huevos.jpg	0	0
65	Jabon de baño	https://i.ibb.co/rKsCp7gc/jabon-de-ba-o.jpg	0	0
66	Jabon de mano	https://i.ibb.co/Z0v5hrm/jabon-de-mano.jpg	0	0
67	Jabon en polvo	https://i.ibb.co/B2NwMtby/jabon-en-polvo.jpg	0	0
68	Jabon de lavaplatos en crema	https://i.ibb.co/tPKmh4XV/jabon-lavaplatos-en-crema.jpg	0	0
69	Jabon de lavaplatos liquido	https://i.ibb.co/BVW9V09R/jabon-lavaplatos-liquido.jpg	0	0
70	Jamon	https://i.ibb.co/R4CJc1rs/jamon.jpg	0	0
71	Kumis	https://i.ibb.co/v6gY7Tkt/kumis.jpg	0	0
72	Lenteja	https://i.ibb.co/9mB0wcrC/lenteja.jpg	0	0
73	Limon mandarino	https://i.ibb.co/W44SK6cd/Limon-Mandarino.jpg	0	0
74	Lulo	https://i.ibb.co/SX9GMn57/lulo.png	0	0
76	Mango	https://i.ibb.co/TDNwmRRZ/mango.png	0	0
77	Maquina de afeitar	https://i.ibb.co/KprPNzhP/maquina-de-afeitar.jpg	0	0
78	Maracuya	https://i.ibb.co/C5NFTR0v/maracuya.jpg	0	0
79	Mata mosquitos en aerosol	https://i.ibb.co/RktDpdVW/mata-mosquitos-en-aerosol.jpg	0	0
80	Mata mosquitos en espiral	https://i.ibb.co/DspGH4S/mata-mosquitos-en-espiral.png	0	0
81	Melon	https://i.ibb.co/LMxGQnW/melon.png	0	0
82	Mora	https://i.ibb.co/pjqcJMjB/mora.jpg	0	0
83	Oregano molido	https://i.ibb.co/99v2p7Fw/oregano-molido.jpg	0	0
21	Arroz	https://i.ibb.co/v6XtVpxW/arroz.jpg	0	0
84	Pan tajado integral	https://i.ibb.co/gbBdQwrh/pan-tajado-integral.jpg	0	0
85	Pan tajado	https://i.ibb.co/tMJ0QMR2/pan-tajado.jpg	0	0
86	Paño super absorbente	https://i.ibb.co/JWB49jvP/pa-o-super-absorbente.jpg	0	0
87	Papa amarilla	https://i.ibb.co/4RQ5mywm/papa-amarilla.jpg	0	0
88	Papa parda	https://i.ibb.co/pHxmkWT/papa-parda.jpg	0	0
89	Pasta corta	https://i.ibb.co/Rkpgyq3h/pasta-corta.jpg	0	0
90	Pasta larga	https://i.ibb.co/ksD2Gcc3/pasta-larga.jpg	0	0
91	Pepino	https://i.ibb.co/B5kkGJwW/pepino.jpg	0	0
92	Pescado	https://i.ibb.co/TxKJNp5M/pescado.jpg	0	0
93	Pimenton	https://i.ibb.co/5WpK4T1T/pimenton.jpg	0	0
94	Pimienta negra en polvo	https://i.ibb.co/jkrMccw5/pimienta-negra-en-polvo.jpg	0	0
95	Platano maduro	https://i.ibb.co/wrg7Dmy7/platano-maduro.webp	0	0
96	Platano verde	https://i.ibb.co/yBd2RYHc/platano-verde.jpg	0	0
97	Ala de pollo	https://i.ibb.co/vCHNYxpc/pollo-alita.webp	0	0
98	Muslo de pollo	https://i.ibb.co/ynYMphG3/pollo-muslo.jpg	0	0
99	Pechuga de pollo	https://i.ibb.co/F4f8Wz0Z/pollo-pechuga.jpg	0	0
100	Repollo	https://i.ibb.co/gbMbqrW9/repollo.jpg	0	0
101	Shampoo	https://i.ibb.co/gbF03ppH/shampoo.jpg	0	0
102	Tocineta	https://i.ibb.co/Y4xzPHFN/tocineta.jpg	0	0
103	Tomate de arbol	https://i.ibb.co/mrqLyPv1/tomate-de-arbol.jpg	0	0
104	Tomate	https://i.ibb.co/SX99V2kv/tomate.jpg	0	0
105	Yogurt griego	https://i.ibb.co/MkmR3vrG/yogurt-griego.png	0	0
106	Yogurt	https://i.ibb.co/p84KMdH/yogurt.png	0	0
107	Yuca	https://i.ibb.co/hJxCSPzd/yuca.jpg	0	0
108	Zanahoria	https://i.ibb.co/BVpDPG56/zanahoria.jpg	0	0
109	Manteca de cerdo	https://i.ibb.co/NP0SMp3/manteca-de-cerdo.webp	0	0
110	Papel higienico	https://i.ibb.co/5hx8b3dH/Papel-higienico.jpg	0	0
111	Bolsa de basura	https://i.ibb.co/Z6jCp1JC/bolsa-de-basura.jpg	0	0
112	Soflan	https://i.ibb.co/q37H7pb7/soflan.png	0	0
113	Ulluco	https://i.ibb.co/Lhk8ghBD/ulluco.jpg	0	0
114	Espagueti corto	https://i.ibb.co/67tFZ7yf/espagueti-corto.jpg	0	0
115	Fideos	https://i.ibb.co/Mvf93CY/fideos.jpg	0	0
116	Acelga	https://i.ibb.co/99C2myHZ/acelga.jpg	0	0
117	Aliños	https://i.ibb.co/sB3JJ7s/ali-os.webp	0	0
118	Apio	https://i.ibb.co/Gf82W9KM/apio.jpg	0	0
119	Arandanos	https://i.ibb.co/mVtNZPP0/Ar-ndanos.jpg	0	0
120	Aromatica	https://i.ibb.co/TD5BCs8m/aromatica.webp	0	0
121	Chorizo	https://i.ibb.co/PsrTGvsW/chorizo.jpg	0	0
122	Clorox ropa color	https://i.ibb.co/wF8Pzf36/clorox-ropa-color.jpg	0	0
123	Desodorante en aerosol	https://i.ibb.co/LhQwbpQg/desodorante-aerosol.webp	0	0
124	Espinaca	https://i.ibb.co/HD69rGmj/espinaca.webp	0	0
125	Frutos secos	https://i.ibb.co/KzVVMLHc/frutos-secos.jpg	0	0
126	Gaseosa	https://i.ibb.co/FbVVnBk0/gaseosa.jpg	0	0
127	Granola	https://i.ibb.co/M5f82d6X/granola.webp	0	0
128	Maggi	https://i.ibb.co/wh2dBxvd/maggi.webp	0	0
129	Maiz crispetas	https://i.ibb.co/0jWqWBvH/maiz-crispetas.jpg	0	0
130	Maiz en lata	https://i.ibb.co/814T1P4/maiz-en-lata.jpg	0	0
131	Maiz	https://i.ibb.co/hRk3x6s7/maiz.png	0	0
132	Choclo	https://i.ibb.co/hRk3x6s7/maiz.png	0	0
133	Mandarina	https://i.ibb.co/3mtZhbtt/mandarina.jpg	0	0
134	Mani	https://i.ibb.co/6c95bMZq/mani.jpg	0	0
135	Mortadela	https://i.ibb.co/7dTMJf8d/mortadela.png	0	0
136	Mostaza	https://i.ibb.co/99vYWLYc/mostaza.webp	0	0
137	Naranja	https://i.ibb.co/q38RSh63/naranja.png	0	0
138	Paños humedos para gatos	https://i.ibb.co/yF3dP4Bc/pa-os-humedos-de-gato.png	0	0
139	Paños humedos	https://i.ibb.co/yF8jMwc4/pa-os-humedos.jpg	0	0
140	Papaya	https://i.ibb.co/HTZZcS9d/papaya.jpg	0	0
141	Quita manchas	https://i.ibb.co/SDsqFJ4q/quita-manchas.jpg	0	0
142	Remolacha	https://i.ibb.co/wF1N7vYk/remolacha.webp	0	0
143	Sandia	https://i.ibb.co/270D1YJ3/sandia.jpg	0	0
144	Sardina en lata	https://i.ibb.co/QFPC6sff/sardinas-en-lata.jpg	0	0
145	Servilleta	https://i.ibb.co/fYFDxPc2/servilleta.png	0	0
146	Talco	https://i.ibb.co/QFtjr8Kx/talco.jpg	0	0
147	Toalla higienica	https://i.ibb.co/P2RV486/toalla-higienica.webp	0	0
148	Velas de incienso	https://i.ibb.co/4RY3SGXv/velas-de-incienso.webp	0	0
149	Vela	https://i.ibb.co/gZG7NvRw/vela.webp	0	0
150	Salsa roja	https://i.ibb.co/B2Cn4jyg/Salsa-roja.png	0	0
151	Pasta de tomate	https://i.ibb.co/d4FkYzhL/Pasta-de-tomate.jpg	0	0
152	Otros	https://i.ibb.co/7xDHmRTK/otros.jpg	0	0
153	Papel aluminio	https://i.ibb.co/KzhW8XRD/Papel-Aluminio.jpg	0	0
154	Quinua	https://i.ibb.co/PGVnzL7V/quinua.webp	0	0
155	Salsa queso cheddar	https://i.ibb.co/zh4YxcHG/Salsa-queso-cheddar.jpg	0	0
156	Mayonesa	https://i.ibb.co/fzykQPr0/Mayonesa.png	0	0
157	Creolina	https://i.ibb.co/nNbhz97f/7704701203021.jpg	0	0
159	Dorito	https://i.ibb.co/0VYLHCY5/Dorito.jpg	0	0
158	Doritos flaming hot	https://i.ibb.co/nNbhz97f/7704701203021.jpg	0	0
160	Cheetos boliqueso	https://i.ibb.co/jZVSnF5C/Cheetos-boliqueso.webp	0	0
161	Cheetos natural	https://i.ibb.co/Zpy1845B/Cheetos-natural.webp	0	0
162	Detodito mix	https://i.ibb.co/JR6fJ3v3/images-1.jpg	0	0
75	Mango grande	https://i.ibb.co/KzLrxgBX/manga.jpg	0	0
163	Queso crema	https://i.ibb.co/Z621Hxtc/Queso-crema.jpg	0	0
164	Buñuelo	https://i.ibb.co/bjqfcbp8/Bu-uelo.jpg	0	0
165	Tostada de ajo	https://i.ibb.co/Z11xYNkf/Tostada-de-ajo.webp	0	0
166	Tostada de platano verde	https://i.ibb.co/s9065m0D/Tostada-de-platano-verde.jpg	0	0
167	Curcuma	https://i.ibb.co/DhPvggD/Curcuma.jpg	0	0
168	Curuba	https://i.ibb.co/8LbYwRHY/Curuba.webp	0	0
169	Crema de afeitar hombres	https://i.ibb.co/6cYNn0G9/Crema-para-afeitar-hombres.png	0	0
170	Crema de afeitar mujeres	https://i.ibb.co/Y4Ss42c6/Crema-de-afeitar-mujeres.webp	0	0
171	Perejil	https://i.ibb.co/pvqnhBxr/Perejil.webp	0	0
173	Termo	https://i.ibb.co/twRSymnX/blob.jpg	0	0
174	Veneno para ratas	https://i.ibb.co/RTLc863h/blob.webp	0	0
\.


--
-- Name: supermarket_list_db_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.supermarket_list_db_id_seq', 174, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: added_Products added_Products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."added_Products"
    ADD CONSTRAINT "added_Products_pkey" PRIMARY KEY (id);


--
-- Name: crossedOutProduct crossedOutProduct_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."crossedOutProduct"
    ADD CONSTRAINT "crossedOutProduct_pkey" PRIMARY KEY (id);


--
-- Name: supermarket_list_db supermarket_list_db_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supermarket_list_db
    ADD CONSTRAINT supermarket_list_db_pkey PRIMARY KEY (id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--


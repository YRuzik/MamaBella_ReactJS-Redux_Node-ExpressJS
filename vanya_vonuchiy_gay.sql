PGDMP                         {         
   mama-bella    15.1    15.1 Y    _           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            `           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            a           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            b           1262    32837 
   mama-bella    DATABASE     �   CREATE DATABASE "mama-bella" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "mama-bella";
                postgres    false            �            1259    41928 	   addresses    TABLE     i   CREATE TABLE public.addresses (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    address text
);
    DROP TABLE public.addresses;
       public         heap    postgres    false            �            1259    41926    addresses_id_seq    SEQUENCE     y   CREATE SEQUENCE public.addresses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.addresses_id_seq;
       public          postgres    false    229            c           0    0    addresses_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.addresses_id_seq OWNED BY public.addresses.id;
          public          postgres    false    227            �            1259    41927    addresses_user_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.addresses_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.addresses_user_id_seq;
       public          postgres    false    229            d           0    0    addresses_user_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.addresses_user_id_seq OWNED BY public.addresses.user_id;
          public          postgres    false    228            �            1259    33644 
   categories    TABLE     `   CREATE TABLE public.categories (
    id bigint NOT NULL,
    category character varying(128)
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    33643    categories_id_seq    SEQUENCE     z   CREATE SEQUENCE public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    222            e           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    221            �            1259    32985    news    TABLE     �   CREATE TABLE public.news (
    id bigint NOT NULL,
    title character varying(256),
    thumbnail text,
    description text
);
    DROP TABLE public.news;
       public         heap    postgres    false            �            1259    32984    news_id_seq    SEQUENCE     t   CREATE SEQUENCE public.news_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.news_id_seq;
       public          postgres    false    215            f           0    0    news_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;
          public          postgres    false    214            �            1259    41945    orders    TABLE     �   CREATE TABLE public.orders (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    total_price numeric,
    address_id bigint NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    41944    orders_address_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.orders_address_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.orders_address_id_seq;
       public          postgres    false    233            g           0    0    orders_address_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.orders_address_id_seq OWNED BY public.orders.address_id;
          public          postgres    false    232            �            1259    41942    orders_id_seq    SEQUENCE     v   CREATE SEQUENCE public.orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    233            h           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    230            �            1259    41943    orders_user_id_seq    SEQUENCE     {   CREATE SEQUENCE public.orders_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.orders_user_id_seq;
       public          postgres    false    233            i           0    0    orders_user_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.orders_user_id_seq OWNED BY public.orders.user_id;
          public          postgres    false    231            �            1259    33665    prices    TABLE     �   CREATE TABLE public.prices (
    id bigint NOT NULL,
    product_id integer,
    price numeric,
    weight integer,
    size integer
);
    DROP TABLE public.prices;
       public         heap    postgres    false            �            1259    33664    prices_id_seq    SEQUENCE     v   CREATE SEQUENCE public.prices_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.prices_id_seq;
       public          postgres    false    226            j           0    0    prices_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.prices_id_seq OWNED BY public.prices.id;
          public          postgres    false    225            �            1259    33651    products    TABLE     �   CREATE TABLE public.products (
    id bigint NOT NULL,
    title character varying(256),
    description text,
    category integer,
    thumbnail text
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    33650    products_id_seq    SEQUENCE     x   CREATE SEQUENCE public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    224            k           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    223            �            1259    50222    user_analytics    TABLE     �   CREATE TABLE public.user_analytics (
    id bigint NOT NULL,
    length integer,
    creation_date date DEFAULT CURRENT_DATE
);
 "   DROP TABLE public.user_analytics;
       public         heap    postgres    false            �            1259    50221    user_analytics_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.user_analytics_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.user_analytics_id_seq;
       public          postgres    false    235            l           0    0    user_analytics_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.user_analytics_id_seq OWNED BY public.user_analytics.id;
          public          postgres    false    234            �            1259    33067    user_tokens    TABLE     i   CREATE TABLE public.user_tokens (
    id bigint NOT NULL,
    token text,
    user_id bigint NOT NULL
);
    DROP TABLE public.user_tokens;
       public         heap    postgres    false            �            1259    33065    user_tokens_id_seq    SEQUENCE     {   CREATE SEQUENCE public.user_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.user_tokens_id_seq;
       public          postgres    false    220            m           0    0    user_tokens_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.user_tokens_id_seq OWNED BY public.user_tokens.id;
          public          postgres    false    218            �            1259    33066    user_tokens_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_tokens_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.user_tokens_user_id_seq;
       public          postgres    false    220            n           0    0    user_tokens_user_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.user_tokens_user_id_seq OWNED BY public.user_tokens.user_id;
          public          postgres    false    219            �            1259    32994    users    TABLE     X  CREATE TABLE public.users (
    id bigint NOT NULL,
    username character varying(256),
    first_name text,
    last_name text,
    email character varying(256),
    password character varying(256),
    address text,
    activated boolean DEFAULT false NOT NULL,
    activation_link text NOT NULL,
    admin boolean DEFAULT false NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    32993    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    217            o           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    216            �           2604    41931    addresses id    DEFAULT     l   ALTER TABLE ONLY public.addresses ALTER COLUMN id SET DEFAULT nextval('public.addresses_id_seq'::regclass);
 ;   ALTER TABLE public.addresses ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    229    229            �           2604    41932    addresses user_id    DEFAULT     v   ALTER TABLE ONLY public.addresses ALTER COLUMN user_id SET DEFAULT nextval('public.addresses_user_id_seq'::regclass);
 @   ALTER TABLE public.addresses ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    33647    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            �           2604    32988    news id    DEFAULT     b   ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);
 6   ALTER TABLE public.news ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    41948 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    233    233            �           2604    41949    orders user_id    DEFAULT     p   ALTER TABLE ONLY public.orders ALTER COLUMN user_id SET DEFAULT nextval('public.orders_user_id_seq'::regclass);
 =   ALTER TABLE public.orders ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    233    231    233            �           2604    41950    orders address_id    DEFAULT     v   ALTER TABLE ONLY public.orders ALTER COLUMN address_id SET DEFAULT nextval('public.orders_address_id_seq'::regclass);
 @   ALTER TABLE public.orders ALTER COLUMN address_id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    33668 	   prices id    DEFAULT     f   ALTER TABLE ONLY public.prices ALTER COLUMN id SET DEFAULT nextval('public.prices_id_seq'::regclass);
 8   ALTER TABLE public.prices ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    33654    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224            �           2604    50225    user_analytics id    DEFAULT     v   ALTER TABLE ONLY public.user_analytics ALTER COLUMN id SET DEFAULT nextval('public.user_analytics_id_seq'::regclass);
 @   ALTER TABLE public.user_analytics ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234    235            �           2604    33070    user_tokens id    DEFAULT     p   ALTER TABLE ONLY public.user_tokens ALTER COLUMN id SET DEFAULT nextval('public.user_tokens_id_seq'::regclass);
 =   ALTER TABLE public.user_tokens ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    218    220            �           2604    33071    user_tokens user_id    DEFAULT     z   ALTER TABLE ONLY public.user_tokens ALTER COLUMN user_id SET DEFAULT nextval('public.user_tokens_user_id_seq'::regclass);
 B   ALTER TABLE public.user_tokens ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    32997    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            V          0    41928 	   addresses 
   TABLE DATA           9   COPY public.addresses (id, user_id, address) FROM stdin;
    public          postgres    false    229   `       O          0    33644 
   categories 
   TABLE DATA           2   COPY public.categories (id, category) FROM stdin;
    public          postgres    false    222   t`       H          0    32985    news 
   TABLE DATA           A   COPY public.news (id, title, thumbnail, description) FROM stdin;
    public          postgres    false    215   �`       Z          0    41945    orders 
   TABLE DATA           F   COPY public.orders (id, user_id, total_price, address_id) FROM stdin;
    public          postgres    false    233   �`       S          0    33665    prices 
   TABLE DATA           E   COPY public.prices (id, product_id, price, weight, size) FROM stdin;
    public          postgres    false    226   a       Q          0    33651    products 
   TABLE DATA           O   COPY public.products (id, title, description, category, thumbnail) FROM stdin;
    public          postgres    false    224   Nc       \          0    50222    user_analytics 
   TABLE DATA           C   COPY public.user_analytics (id, length, creation_date) FROM stdin;
    public          postgres    false    235   K�       M          0    33067    user_tokens 
   TABLE DATA           9   COPY public.user_tokens (id, token, user_id) FROM stdin;
    public          postgres    false    220   ��       J          0    32994    users 
   TABLE DATA           �   COPY public.users (id, username, first_name, last_name, email, password, address, activated, activation_link, admin) FROM stdin;
    public          postgres    false    217   f�       p           0    0    addresses_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.addresses_id_seq', 14, true);
          public          postgres    false    227            q           0    0    addresses_user_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.addresses_user_id_seq', 2, true);
          public          postgres    false    228            r           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 5, true);
          public          postgres    false    221            s           0    0    news_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.news_id_seq', 1, false);
          public          postgres    false    214            t           0    0    orders_address_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.orders_address_id_seq', 1, false);
          public          postgres    false    232            u           0    0    orders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.orders_id_seq', 1, false);
          public          postgres    false    230            v           0    0    orders_user_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.orders_user_id_seq', 1, false);
          public          postgres    false    231            w           0    0    prices_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.prices_id_seq', 98, true);
          public          postgres    false    225            x           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 54, true);
          public          postgres    false    223            y           0    0    user_analytics_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.user_analytics_id_seq', 7, true);
          public          postgres    false    234            z           0    0    user_tokens_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.user_tokens_id_seq', 581, true);
          public          postgres    false    218            {           0    0    user_tokens_user_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.user_tokens_user_id_seq', 1, false);
          public          postgres    false    219            |           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 66, true);
          public          postgres    false    216            �           2606    41936    addresses addresses_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.addresses DROP CONSTRAINT addresses_pkey;
       public            postgres    false    229            �           2606    33649    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    222            �           2606    32992    news news_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.news DROP CONSTRAINT news_pkey;
       public            postgres    false    215            �           2606    41954    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    233            �           2606    33672    prices prices_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.prices
    ADD CONSTRAINT prices_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.prices DROP CONSTRAINT prices_pkey;
       public            postgres    false    226            �           2606    33658    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    224            �           2606    50227 "   user_analytics user_analytics_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.user_analytics
    ADD CONSTRAINT user_analytics_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.user_analytics DROP CONSTRAINT user_analytics_pkey;
       public            postgres    false    235            �           2606    33075    user_tokens user_tokens_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.user_tokens
    ADD CONSTRAINT user_tokens_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.user_tokens DROP CONSTRAINT user_tokens_pkey;
       public            postgres    false    220            �           2606    33001    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    217            �           2606    41937     addresses addresses_user_id_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 J   ALTER TABLE ONLY public.addresses DROP CONSTRAINT addresses_user_id_fkey;
       public          postgres    false    217    3236    229            �           2606    41960    orders orders_address_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_address_id_fkey FOREIGN KEY (address_id) REFERENCES public.addresses(id);
 G   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_address_id_fkey;
       public          postgres    false    3246    233    229            �           2606    41955    orders orders_user_id_fkey    FK CONSTRAINT     y   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    3236    233    217            �           2606    33673    prices prices_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.prices
    ADD CONSTRAINT prices_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);
 G   ALTER TABLE ONLY public.prices DROP CONSTRAINT prices_product_id_fkey;
       public          postgres    false    3242    226    224            �           2606    33659    products products_category_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_fkey FOREIGN KEY (category) REFERENCES public.categories(id);
 I   ALTER TABLE ONLY public.products DROP CONSTRAINT products_category_fkey;
       public          postgres    false    222    3240    224            �           2606    33076 $   user_tokens user_tokens_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_tokens
    ADD CONSTRAINT user_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 N   ALTER TABLE ONLY public.user_tokens DROP CONSTRAINT user_tokens_user_id_fkey;
       public          postgres    false    220    3236    217            V   S   x�34�45弰���{/���eh��|a���/6]ء�۠{a��6^ت�pa����	��ua�����	W� �"�      O   P   x�3�0��m�.l�2⼰��/l��t��˘��t w��拍v]��e�ya.P`?PCX��aH�<F��� w�-j      H      x������ � �      Z      x������ � �      S   0  x�M�K�%!D��b��^j��� ̧9xUy5� ?**�~M,>G6��8p '~O+��t`�	L|�-��5�#O`���(���(�&]:���Z\�"(Wd�U�m�]�󗾃km��8>�S�����ֿ�'x�k�K��� �t?���ԛ�dk���`ֳ�[����-dq��o	����������(Go|a o	��.�85��@�S�{���»���O����Y�B|��2����y��?Y�e�d�Z~w��d�p�ӆ��e�(�[EZd��~M�$�����p��V���j��A^���ac�v#v��I�F�=����dp�;��r�/09 9zLΝ����P����Ҩ���.*U���b��p'�r^�b����%��}�81>���Q��➧Ѭ[@���ɪh�U�u��(��n��:o�F�G��<�zn�Qw�>�7|�ɏ|j��͋�?9*��9��~�id,��`}��N�G�c~�]~��|��|��7>z4�����_���㨁�n]���.!�^��g��n�%�J��߿�y��,�Y      Q      x��}�ncٕ�s�+	��������y�(���AIQ$�2��v;+�
�F���U(t?�KؙiGN�@}��G��BA)A�U-�C���$���Y{���9A�]�����_]�����\���Ǘ_^������W�^~w����˗W�~���//��|}��嗗�����W?�k_���/�|~����7�_&O��\�^��2����_\}W�;��/?O^����p\�<y���������{}q�.I/�|��!x��WW?�ώF�����O�O��E�{b|�ķ���LM߇�O�?=�q;\�4
˕�:R�hD�I�������[&P�y+$�6l��B ϹS��~���*=�wi�'c��n����ڝz�(�b�X_���\��8����e��G����V�����iu���j���p6����A������?0)g�Ǳ�}�qg}D�i�$�\�oB��s�y��i��c��OO��Q���Q��m�Ï����w۽��#�cw����9�����=�
A6�W�o.�w>|��?�۳�V�M�W�#̟]� ���'�$���կ!X/�痯�pBl_��_�,	��痯�]��w_�B��p)���p��//� h����>��*�\�G��3_�O��������-?�����?NpzH)�?��x��2���y{����g�w��#�J����s���k��c���GT� D/��j�(�$2��q�9��˭�f�6���C��|�G,7�m����pq`��l��v�=�n��af_n�;��R���794
��&����N��C.`�рm̑���#��	q'q�����W�#`����Z���X�+��	�$ �2����	xR���������?�����2�"��]����ݽJ�뾁�M@��+p�'s��?x[��
	o��=�TD�f�,E�*!8ᴣ� L�F#�0��%Վ�[���@���Z��\s[��'[�R,l��Y��mg7��t�sq�?�C���h���sے�J;�l��΀퓎d�xpe��@�
!��5�p�5��K�$u�	�%oc�&!Ki���).�DB��ַ	��3�4E_JR_޽��->J �@H,�̿�����o�$7x��Rn�v���w����|�����_�߼�_�̈́�R�}�@���D��+G�ԄJ,S�@��BDEb��R�� 9*�Z� M4)��
��~��H���O���c�����aYu��G��Y�EvXD�t?T�4�s��6*�?.˔�k��B舤�%�5O~���	Q�n���RE5Or�˯>H�-��QિZd�����X^%@�����]�D�}�����o0v�Y� �?%)xNs>O��}�Pp_'���[7�푀��\�౱HK�W���h���R"7R"�MP;	���)����vqt�9��VT]�������#'��h�]Z�ol֟���k��Qw�8��mW���%��V 9��9U:@B�s�<y:@���{ӵ*Z�a�C�������4�\}:W`�.�6�v�#I8S`�z���-�ޥ�R�~}�"����9O� ����,�����m&1i&����X\-�Q��$P�Ts_2�AWQem�
b�Y�=��C�&!�p��;�31z\O��}yq�U<?��T��j�p��⤳��\#�P�f[33�v��	V��e�-�,�& u�U�0����{���K1�(��n3���/�KW/���6�{�Vﳅ���S�7����n����9�H�j����ﯙ������G��0��h=�D{O����VC�4�"��7)]4���M��Y#����D����+�ze�Wa�ý`��q�ޤ��W��۬�N�+&��onK���l�ztxԠ-�害��â���9����x��,tO)5Oz�'����P�x8�Ǡ�S��,U;	N�M�\�z�y
�o��,}��O7���9"���G
,��$�`i�W�;`���D���#Q"؀\J��sũ	i���w����ޠ�~�h��=,�Ř�v��s3�;��Wkkl��rh�;�T���}��&�;����P'x�����<P�"*r�$�Jp����E�X�	�^�?��H}�:���O2�\���̅�5��N�p�Q�x�!nq�[:�K���T1#	7H@��
x7JJ%�,NZ"�Q�j��P�Y��8���w��sGa����b���ڬ�?���^�����f����St�m���C�WkS��պ���yWO��u�WI�X�	� �$�Ok�.t=�'~���J�:��������b���H�^绛z�_�:�osƛ��o��O�,�
xqR��8M����!HCy�(�"I��H"- �R����`�x"+0X��0�����X�vO&��������hX��GQ*e����V����Nm���Y�{JE�[]]�t�%
 
�[k�/���	F3�=�G��>��)Y����7�6�K����o<�?�Mo���>��>�J��
'$�*8E�4BAL�r�*�y�U�p.��H�`#r�C8O֒�}^k���ZŬ��\yC_�k�L�bܙ�|iw6�>���ڮ�3�	�m�l#�dVOsͭv~��߬U�ho�Y�]�w�˨B#K-����j�8f쨕�_󄚀��<�S���e������^��:Ն��g����Oߧ���I��<���Cz3��wN<��E(��ω��	,e�Y��lF�=b
G�F!dM��6\.�d�~s�O�'�Ã�'뇤0ژ�q�P��:�ve��/�MV���Zg�$�|{��ߴ�M���6!�qQ��.F�q,\���ZiG8&��FF�0�	R�cᢃ?�<p�m���u���O�kU�/V�?�AG�N����D�d � �G����^s�!��ÁQ�HP�)�Q9��a��s ���V�"�ﭰ>��#�f�>6Ek̼eg}���(*zQ-;��2+F�����2��!���� ʝ�)�K�����o�)_$�~��@7�����h���+�@&]��?�ǽ��t�K����~[gy~��r]-y�y��z�����v��[]���[RBN���1���8c�S��`P!�"�!p	�. DW�"�@�X����YEI��YW�q�������0S�^��O���	n�*;��^���C�W4&�R����i�'�^^� <H��Q�"i�;��`�(A4<a���~x�ۏ�/�-뜿�)���*R*!�+�#�@A�`Ld���SJ�����		HL�Q�2Ą�1En�F�����ˮ�������^�˽�J�����k��V^����fw�'g��r`��,3И���&"&�D�h�B���C������3�׵��8�|\�>���I,R���p7E��7o���ڤ��2��S�n0>�j$ՠ����:UJK<�A@q"$R\�\ta�(U.rEq`���R$���RP�ɡ<o����y��@�����t�lw��ߙ���)��>�f::?n��N������m��0YZ�a؄`�s@yR	J��<1��{B[�n��w���n	��ҭ��b�J���~>��$!/��v�/�u��7H}�ގ}���pW�y$+�s 
Ch!���m O���k�}�b� q�!1����(;�j�Mví�V��9:������5��f��^!��C��r����h�k����Ɋ��f/�[��2����X�� 	f:PI2-��	{��Θ؛�I�א-^?Դ����\5��˴Tn?�	���^�GL������x����"�I��b��(��:8%�bz^th�N��Ue[���hU��ٿ���=�=�N���]/����e��Ƒ=��f�;.�����Y4H���H���`����Qȧ쌣"��$xטZ ϋk���z�������4���N�gB �?�}�>70�=���o2������j��M����?O�x�vP��L=�W鬤@3ࢥ����)B#6^F�U"T�T*X��URi?Ol    �qqgx���*ʌZ�tͭ�ݫ�Ns�u=flt�Wt~-^�WO��b�{���tkr�S���AM/��N#�	$�H-��h,gl����P-a|����-�|�Z�H�'��`��9H� X�A�7�$�{F2$����>����w57Z�(	cI�20ذ�] W�'f���;=�w�}tv�՞��V��ߗ��kG���lu�%W��ꙻ�_�M�zw�cv����Ia��r�%j'��Vǜd�p�`^���0��Z(��_��$�Z�.�7�2Z:��͘�2���k-�!D"��`�M$�j��d�J3m�^1����\��crǁ0��y�aX��TO'G���Fv#��~~#s/,�eW�쟖6N�x�����7�(���GyvX�o�T��ˋ��3���"�VV�T"�B`��EE|��w��| ��z��y\r������~�޷H{T��?3�q��)a)�x�	pH$�(�4��-� �FуT&�2M��OGǵ��]���ɾ? �9<�W��3;�5>��nl���z�B�g�q�����㞟��!��=�t � ��1�TBlڡhM�S��ட*�.�|�j�/��|w;�<�#��>�?d�ȢrbL]����d���I�� ��'-(es��y�ZOW+�U�����As����y^Pd��U���1�4�_������&5v�W95�v<_�q�~�k��Ym��`�x�~��~%��5�Q#�v�I��~C�~8�w�Tq:�@���=X�Ȗ[���*��������=�a~1o�?r��c#1Lr�cHj��e���f�"Ɉ�����J"�b��GB(�� �Iv�����Q���{�i��J����Q�-sg���d���i�tP����T���&���f�tr�4EaǕ!QC00e����T�SQ�����ђ�
\ݨ�9�>�U���&�w�����K��M�����س��u{����tk��Aܴ�q��Þ?��7�z�}����[��[�����g�?�w�6�D Ya�h� 7���#H��� 9	s��Y�@�������.M�I;�Q�xV)�G�����t��]8�{�m��E�wث6���Yv0تl�3a��__ɔ���~c�-˗��L��"�B���Y&�B�d��O�E��iat	�%��o����C:L�z>U����v���Қ�w���H����?��k�����z!z��{���DF��X�C�.�`��!hk-a� ���rx,��I��;�#��"Q��luN������j���Мm��z�젻G�� �Aw:n57T6�{�:-�zf>(a	�	����AnvΦS��O��t�V_�����?�����䮬�x6�1��ߥ �����R��"�@� 9TJ� �a����΢�Z�.�s{/. c�g�ƴ�do�C��e�Q簺�ƴ�E�wXm�+���Ҏ8����*�	_����̲:!�Ir ~ˣ#�FL�6���%�;{���z�@���[ؙ���?,��.��nɜ[�ȯ^�.7_���w��towc�[f���ji��j�E��Dp�5�J�B�j�	QFX��o��������W�ۻ��s͵�U�F�UΦ'��z~��r�Bw��t��쨺C�ghg�+�quiI��[�"
A�''	��Ȟ��Q�v���x���9����?���Z�h�7w��_�,�P��<�<W&"*1����Q0�ބ��i�>�Н�Y���;��.-���y��������Ϣ
�a:in7�ɕ�s�3x^Տ�YW����˲�-8F!��(���!�D���=!p"*^���"�����P�<jw]@Nl�7��39���y��E�N�(��s�@�q�h����[�G(�v2��]ʚ�]�*�z�i9�֢��J����~��Q#�Z��x�g��(�Қ6�n����J3Z/����>O-�E��TQ�7��p�O�(�/v�&�R!��8�	�m�µ���#�
��	���@����U��]�`���n��J�d?�b@��FN��֭V+q�_;�S��l�ϊ{X�g�-�Dc7g�k�g��C5[ˆv{������f�?���k�au�l[�����^����K�	�-C���Z�����`j����/|��u�ﭫ{yg��{����6V�����@]«�A�z�>�Bl�'H Egda����ҳ�YmJ��o�R����j��0��>>�K���7G'�}}b���F/���>�NJ�;�G�U��R#\���i��G�*�8^qE!�>aٳ��@�|��ȯo�}�N�7���_]��5��v�5���^��<�i-T�b��o�]���͖����1)K|�p�@��|2�z{��H�
қS��ޮx������9��oR�A._��Cj^�3��I�-2����\K0o�k��T��$�bҼ�<\r��`:��/���F'�\��7<^?2{���g���ӉU�j}4]�U<���Y�[[ŢZ'����C�=�:^� �u��6V���%�t��0�?e6�wqv�/�Q߁t��|��|�������d�y����bI�bS��R6���A�t>ǈi$>��?������;S'�B����-m��I��lV��Ī��^�Ѩ����j���x���L׎F���|X��ǂ	�5��Y8 �1T�����'A����O�v�<���Hf�^%��U���c���W���|�>���)H����w�\���'��g�Q��O�~~�'���W�+H���$�=RL�d[�W�-��A9:,�Lg���1�A���$�',q�.u���(�B��Y��]��ctйk���8o�9;Z�M�ey\��f'�3���r�v��.��vni�.�o�@E4Hs
���Jr���<a��ִ!��#�|>,���������z�&ɛ޼E�K^�#s��v�'I���I���`��6�|.D&(�@5��.'D�B� G�����Ֆ��~Y�
�q:(O��������N�匭>R�{k�'֯��^fe4��C=̷�R���t�:vL`©�VK�}T T�	
��jǗi�'ݼ|_�����u��f�pM)��E:^?������ٝ��ra�;��T*�,��j�BY*��`�$�]�g= �5�L8�Y�#��&���>^��^�x��mZ"��s�}��*1���o�Hs�|��	�Ms��m���z[��v�F����?�D����]��z�,��.(ܜt�����3ĭۄ �?!b�������z�[~���#�w4���''a��r��56i5XW�����q�#�� *"9�"+���T7�;��ߟm�;��}����6����P�x��A������x��y(
���$�Vf�e�� ���u ��zlLĒ��}B��P�M��/�z��_%C��s��]�㭇_.���L,��g�Q��<� 5����2.&e9m(�ܝl���1 wH'������h�u�hs�p��ۢS�UmF[�p<��^?��^��X~���<C���?k���!��ҤF�1�2���po�X9�[�vcJ�{� 0u�	�z�	�� jq������IQ�U��ҭK����L����P�O�9�߾}�N�/�7����U�E��1��QC��.{�a9Fq�Ȇ�4�7#�G���-�|o7+mWG�k�]4]o�NE9����&���Fv����4����M�/�S/�U~�7[G�(��ܑs�bQQ�1%b%�p[�=�<7#K0ɢ�>�s}շ��s��g������i����B�}*��Ɩ���,@>���r
�p*�i"2�&����^N��`/g�M��$�jV��x����b��2*���k�u}_�+���]=�ee�}���a�T���$_8Y�f���|��\�L��"-�QNH��&�l8q��q��3(����էi��7�A-�iR����t4��S�?^���QM#��A c�$��t��[��#�Aԅ��ϕ�*P,"��2&X0a^�F��m�6�u���v��7�k�Q�5z����nO��&o:�09r�uEҳ���Zn �  P:Zk�w�?۟������G�,�M�"�By�H�+f��FO8}��h��˛��F����Os��uRǝ�{���Ӝ�퇰�pSgAcb�"�Qc��
��Z��o�4J���H`w����|b�|�jŝ����Tn��tп/ڙ��h�9��㓱ܬlo�k~\����iv%l�7���K��V�d�2�=,rΈ����'��2�,;�q�_~!�������}z��|�Oi:�:����f�竤^�����j��j����=���xG�J�07	3�+n!�J@�%ͽ�.�8����#2�"����;h]��R6#s��]�?��qz�٘\�������fo+����Eme��Z&7��%_�����58� �k�U��d@�'<����x�פ��N�:Y��j`-&}�t%g��d����g&������x�Z�o��h�ǄE�I�Ɖ���s� �#��
�AA�C.u��\�ӛE@p�*��w��s:���効�X㧝+w��^���[jV��ܨ�%��0���g�<�{3^�^]=8���[?B��PX2��AG��!p�D|�-L. �w���n��yH�����^����?%/o�-t<��0@�0Ǡ�Ђm4%AC�
�RG*�K+���	� )�<����ZN�����y�oW&L��*�����Y�m�l�j�C18��G"��U�����N��۔���퍥��R��GJ64��a�f�p(pwO�����]5�g��#��89�ʢ !SFQ2��($r��q̹���NJb��!9��3�������Ū67�4k�m���������y���m��^s�[�uz�]\<G���n���������mN9�)��/�����  P�.&�f�5�cJ�D"x�6�?��Ӌ��ӂ�\�?2(P�,�"�8M��i��D�lJ��y�4&�2 '�Nj�&2'������'��zN�y����g���ה+��;����&Ų�;��R����tz�����e���p��P%�V	��*���c1���:c�bqw��VD�e�(+ c%GL[Ŕ(@'��DQ����v��Fb&BOJ������-�m�|	�g}D��j�ྈ�z[�X9ժ�>wP�Uc�Wb�qvv������Z�3[��F7/(��w�0.A�=e���ųS(���o���i,&�+dL����Q$��������XP������K����Б��B)�Yg����U[ױ�;Mrv/[�r�M�k�lT+�����Af�B66v���輚網>*�"��ߊ��xL3�$��aD�LX�O���dq��͉������=�p/��"Y �B!�0��d�
��� �9�4 ���r�?�i�{�����S�vP���{#rwF�����JC��.�뻹aϨ��H���������Gl�1���1َ��8�(9���W�>a���[�z��s��e�a����8��l_�Rv'Ӣ��Br�D\��"9������7����1�8���۩����t�_X=,����V���*Wf��x�;������qg�|�̤����!�W�H��=�x��g�����?8��1����im#M�|�ށl!�%Ǘ@�����!� Q! O��Yü�0-�ʽ�^�D�_�`s�so��*�ҸU�as�WQ'g��m�7�����*:Y������-�IY.=J��:�IL�c>���
������G�@��      \   :   x�M̹�0����>���a��)�	�:4���~�,�΅���΃W9�M�?�      M   �  x���K��0 ���:��e}�%�g�!�$7W����an��YgI'9ߜ3�^.g?F�����������ݼ>���x^�[��Z]����I�y�m��1�aC�����i�e�GA�UEِC~���>o��6�w�P&�š]��h�a7fӅ6��ǲ�L�o��g"wk��x��E�>	�D��!�.A���yF�F� yвh{�Sw�	v��-z�����b'��������^�e���'g�+E�̶���Qll+]��T�J��T���d�M5���Vl2�f*66[�ɰ�&�`����8�I��*��A��с��S�8�ZA�NCS�2cN:W+aD�N��&B�
���F�ۛCxM{s����V��̠����	y�~��L�`��0u��+�8�/�an��o׳5sQ�/A���&�f)��g�������i      J   $  x�e��N�0  �sy�]K(��nb�;�'s&����(ˀ:�z]���5����7����}��vMGeU�-�Z��2﨡��A��^Ηп^�����ݾ�J�rE	!��cAUn'e.8x��m�1!;U�(�ӊeC�E���򃅣}v\�u��t���Pw�I��H ���y�3�@,B!
�`�r,
�����T"͏����.͟�/����T�||����$5zl۫�Fj���}zƦ��l�d��=^�K5X��%t�� vB�C!	�G�q��ζ,�pRp�     
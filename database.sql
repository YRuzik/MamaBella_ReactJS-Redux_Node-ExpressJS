PGDMP                          {         
   mama-bella    15.1    15.1 \    f           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            g           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            h           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            i           1262    32837 
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
       public          postgres    false    229            j           0    0    addresses_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.addresses_id_seq OWNED BY public.addresses.id;
          public          postgres    false    227            �            1259    41927    addresses_user_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.addresses_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.addresses_user_id_seq;
       public          postgres    false    229            k           0    0    addresses_user_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.addresses_user_id_seq OWNED BY public.addresses.user_id;
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
       public          postgres    false    222            l           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
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
       public          postgres    false    215            m           0    0    news_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;
          public          postgres    false    214            �            1259    59406    orders    TABLE       CREATE TABLE public.orders (
    id text NOT NULL,
    user_id bigint NOT NULL,
    address text NOT NULL,
    status_id bigint NOT NULL,
    full_price numeric NOT NULL,
    email character varying(255) NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    products json NOT NULL,
    date timestamp with time zone NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    59405    orders_status_id_seq    SEQUENCE     }   CREATE SEQUENCE public.orders_status_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.orders_status_id_seq;
       public          postgres    false    236            n           0    0    orders_status_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.orders_status_id_seq OWNED BY public.orders.status_id;
          public          postgres    false    235            �            1259    59404    orders_user_id_seq    SEQUENCE     {   CREATE SEQUENCE public.orders_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.orders_user_id_seq;
       public          postgres    false    236            o           0    0    orders_user_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.orders_user_id_seq OWNED BY public.orders.user_id;
          public          postgres    false    234            �            1259    33665    prices    TABLE     �   CREATE TABLE public.prices (
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
       public          postgres    false    226            p           0    0    prices_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.prices_id_seq OWNED BY public.prices.id;
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
       public          postgres    false    224            q           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    223            �            1259    58855    statuses    TABLE     e   CREATE TABLE public.statuses (
    id bigint NOT NULL,
    status character varying(255) NOT NULL
);
    DROP TABLE public.statuses;
       public         heap    postgres    false            �            1259    58854    statuses_id_seq    SEQUENCE     x   CREATE SEQUENCE public.statuses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.statuses_id_seq;
       public          postgres    false    233            r           0    0    statuses_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.statuses_id_seq OWNED BY public.statuses.id;
          public          postgres    false    232            �            1259    50222    user_analytics    TABLE     �   CREATE TABLE public.user_analytics (
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
       public          postgres    false    231            s           0    0    user_analytics_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.user_analytics_id_seq OWNED BY public.user_analytics.id;
          public          postgres    false    230            �            1259    33067    user_tokens    TABLE     i   CREATE TABLE public.user_tokens (
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
       public          postgres    false    220            t           0    0    user_tokens_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.user_tokens_id_seq OWNED BY public.user_tokens.id;
          public          postgres    false    218            �            1259    33066    user_tokens_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_tokens_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.user_tokens_user_id_seq;
       public          postgres    false    220            u           0    0    user_tokens_user_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.user_tokens_user_id_seq OWNED BY public.user_tokens.user_id;
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
       public          postgres    false    217            v           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    216            �           2604    41931    addresses id    DEFAULT     l   ALTER TABLE ONLY public.addresses ALTER COLUMN id SET DEFAULT nextval('public.addresses_id_seq'::regclass);
 ;   ALTER TABLE public.addresses ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    227    229            �           2604    41932    addresses user_id    DEFAULT     v   ALTER TABLE ONLY public.addresses ALTER COLUMN user_id SET DEFAULT nextval('public.addresses_user_id_seq'::regclass);
 @   ALTER TABLE public.addresses ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    33647    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    32988    news id    DEFAULT     b   ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);
 6   ALTER TABLE public.news ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    59409    orders user_id    DEFAULT     p   ALTER TABLE ONLY public.orders ALTER COLUMN user_id SET DEFAULT nextval('public.orders_user_id_seq'::regclass);
 =   ALTER TABLE public.orders ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    234    236    236            �           2604    59410    orders status_id    DEFAULT     t   ALTER TABLE ONLY public.orders ALTER COLUMN status_id SET DEFAULT nextval('public.orders_status_id_seq'::regclass);
 ?   ALTER TABLE public.orders ALTER COLUMN status_id DROP DEFAULT;
       public          postgres    false    235    236    236            �           2604    33668 	   prices id    DEFAULT     f   ALTER TABLE ONLY public.prices ALTER COLUMN id SET DEFAULT nextval('public.prices_id_seq'::regclass);
 8   ALTER TABLE public.prices ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    33654    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224            �           2604    58858    statuses id    DEFAULT     j   ALTER TABLE ONLY public.statuses ALTER COLUMN id SET DEFAULT nextval('public.statuses_id_seq'::regclass);
 :   ALTER TABLE public.statuses ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    50225    user_analytics id    DEFAULT     v   ALTER TABLE ONLY public.user_analytics ALTER COLUMN id SET DEFAULT nextval('public.user_analytics_id_seq'::regclass);
 @   ALTER TABLE public.user_analytics ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    231    231            �           2604    33070    user_tokens id    DEFAULT     p   ALTER TABLE ONLY public.user_tokens ALTER COLUMN id SET DEFAULT nextval('public.user_tokens_id_seq'::regclass);
 =   ALTER TABLE public.user_tokens ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    220    220            �           2604    33071    user_tokens user_id    DEFAULT     z   ALTER TABLE ONLY public.user_tokens ALTER COLUMN user_id SET DEFAULT nextval('public.user_tokens_user_id_seq'::regclass);
 B   ALTER TABLE public.user_tokens ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    220    219    220            �           2604    32997    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            \          0    41928 	   addresses 
   TABLE DATA           9   COPY public.addresses (id, user_id, address) FROM stdin;
    public          postgres    false    229   /d       U          0    33644 
   categories 
   TABLE DATA           2   COPY public.categories (id, category) FROM stdin;
    public          postgres    false    222   Ld       N          0    32985    news 
   TABLE DATA           A   COPY public.news (id, title, thumbnail, description) FROM stdin;
    public          postgres    false    215   �d       c          0    59406    orders 
   TABLE DATA           {   COPY public.orders (id, user_id, address, status_id, full_price, email, first_name, last_name, products, date) FROM stdin;
    public          postgres    false    236   Gj       Y          0    33665    prices 
   TABLE DATA           E   COPY public.prices (id, product_id, price, weight, size) FROM stdin;
    public          postgres    false    226   dj       W          0    33651    products 
   TABLE DATA           O   COPY public.products (id, title, description, category, thumbnail) FROM stdin;
    public          postgres    false    224   �l       `          0    58855    statuses 
   TABLE DATA           .   COPY public.statuses (id, status) FROM stdin;
    public          postgres    false    233   ��       ^          0    50222    user_analytics 
   TABLE DATA           C   COPY public.user_analytics (id, length, creation_date) FROM stdin;
    public          postgres    false    231   �       S          0    33067    user_tokens 
   TABLE DATA           9   COPY public.user_tokens (id, token, user_id) FROM stdin;
    public          postgres    false    220   a�       P          0    32994    users 
   TABLE DATA           �   COPY public.users (id, username, first_name, last_name, email, password, address, activated, activation_link, admin) FROM stdin;
    public          postgres    false    217   ~�       w           0    0    addresses_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.addresses_id_seq', 17, true);
          public          postgres    false    227            x           0    0    addresses_user_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.addresses_user_id_seq', 2, true);
          public          postgres    false    228            y           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 5, true);
          public          postgres    false    221            z           0    0    news_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.news_id_seq', 4, true);
          public          postgres    false    214            {           0    0    orders_status_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.orders_status_id_seq', 1, false);
          public          postgres    false    235            |           0    0    orders_user_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.orders_user_id_seq', 1, false);
          public          postgres    false    234            }           0    0    prices_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.prices_id_seq', 99, true);
          public          postgres    false    225            ~           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 55, true);
          public          postgres    false    223                       0    0    statuses_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.statuses_id_seq', 3, true);
          public          postgres    false    232            �           0    0    user_analytics_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.user_analytics_id_seq', 8, true);
          public          postgres    false    230            �           0    0    user_tokens_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.user_tokens_id_seq', 876, true);
          public          postgres    false    218            �           0    0    user_tokens_user_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.user_tokens_user_id_seq', 1, false);
          public          postgres    false    219            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 66, true);
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
       public            postgres    false    215            �           2606    59414    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    236            �           2606    33672    prices prices_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.prices
    ADD CONSTRAINT prices_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.prices DROP CONSTRAINT prices_pkey;
       public            postgres    false    226            �           2606    33658    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    224            �           2606    58860    statuses statuses_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.statuses
    ADD CONSTRAINT statuses_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.statuses DROP CONSTRAINT statuses_pkey;
       public            postgres    false    233            �           2606    50227 "   user_analytics user_analytics_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.user_analytics
    ADD CONSTRAINT user_analytics_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.user_analytics DROP CONSTRAINT user_analytics_pkey;
       public            postgres    false    231            �           2606    33075    user_tokens user_tokens_pkey 
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
       public          postgres    false    229    3240    217            �           2606    59420    orders orders_status_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_status_id_fkey FOREIGN KEY (status_id) REFERENCES public.statuses(id);
 F   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_status_id_fkey;
       public          postgres    false    3254    236    233            �           2606    59415    orders orders_user_id_fkey    FK CONSTRAINT     y   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    3240    236    217            �           2606    33673    prices prices_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.prices
    ADD CONSTRAINT prices_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);
 G   ALTER TABLE ONLY public.prices DROP CONSTRAINT prices_product_id_fkey;
       public          postgres    false    224    3246    226            �           2606    33659    products products_category_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_fkey FOREIGN KEY (category) REFERENCES public.categories(id);
 I   ALTER TABLE ONLY public.products DROP CONSTRAINT products_category_fkey;
       public          postgres    false    224    222    3244            �           2606    33076 $   user_tokens user_tokens_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_tokens
    ADD CONSTRAINT user_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 N   ALTER TABLE ONLY public.user_tokens DROP CONSTRAINT user_tokens_user_id_fkey;
       public          postgres    false    220    217    3240            \      x������ � �      U   P   x�3�0��m�.l�2⼰��/l��t��˘��t w��拍v]��e�ya.P`?PCX��aH�<F��� w�-j      N   �  x���Io�F��֧`�)���B`G�Ȓ�1
\�-��BIVN���H�A���"ȹy�#Ƕ��B?I�e�I
$�Z@߼��7�'a��&ð˅{�#���Gޑs���^�C��-.mTn���X1��&'Q���^�7l\��n��������d��[.nOZ��[�#j��
��j"Rٶ$ڪj���x�p]v$CsxY���LA$"}����L�nIZ�m��K��^�K�<'�H�-S�6˵��͡��D'U2��u��Zu~6�3%=c���B)�����:��6�bо-%�}���	���"i�[ƞQ��F7�[U\�Ҫ~�\�K�^���x�h�e��	~�� {A>�Tq­|[�a[���z��A�k%Z�x�}����m]�����GN� �>G.Ȑ�{�+�\��Sx�q�"ohW�]������3�|v��G��;\���9"C���1u
�cҋs�:��q	��SX��>�3G�@,A���"�g@�(�w���@��a�y@�`��\���F��B�}B��i�1�Zpҍ�E%�o�}��l�����>�{��H���P#�{�cO�f��`��6D���9�*�d�b���ݘ8F��� ���W��t�L>ܺ�^��E�9��-lkY�)"�QD[�M�]QIq$I�)�)
��������U�-�q���r�D�Fj�6;�W�l�Z������[��,+N�9�t}ŭ%���Qɺ����J���by+�N����I�L�c�`�iN}���h�	 ����F�f�F�������2�os�\�}h���s���p���gf�%#�O�i�#�p�+��!��A=\��'�,QN���^�c�y�E�pُ�a��\�/���u�e�0%9�%�*(���f[&�eޑl,[&��Id��%f(i�������U� 0��\O�gs�f����Y���Ǜ����Q��Ԇ�l{��2���S�Jk�[�ݮ�ssh��pҚ\������7����k�C��98�{��'��ᓫf�6qL.�h�/98�g������>���je�ݡ2�xO��JF���n�Ԅep%]�4��W��1\��:����a�n�aA�Ls4��3XܻC'�'3�-��k)�����x=dy�$hէQi��u�A��T�1��0TK1$� t� CZ�U�((���W����di��86��]V��*��Z3}>W+���T���|�U���s�GS�ؙN-f��9i�ZK&��-ΗSX�JNj#X���9c�RK.����l}T\�VP�'�"�J�w��������#ڌp�Nrڊ]�;t.��FÏ�;��+�JD�y1���YLr�X{�Fnf9�6�G#��5��a�Qީ�=f���=)>�F����*M��{t��t`��ǳx��x,��D%�      c      x������ � �      Y   6  x�M�[� D��b��&f��uL�5��Œ�_O�ǀ�בM�=�����bb��?ҁa%N`�ul����<�= %FDI��VbmҥC�jU0E�\I��ֻ�[ŧ���7}��)Y������_�<�M�KFe�������j��nT��Lf���o�z��`�͝���Z{���������
�X40�7�`�[����>Nn4t=E��@�[�wA���(4|���S��Y0�/ʤ�獲h?Q��e�D�J����V=Q:2Ŵ��bH�FO�y�&x#�UZ�bN���Kp�ƞ%Fۅo��Ŋg�s����Q��uԓ[_��������+��"R`NZ���JϚ��*,���2�q�N�����?:qq	Y羳�8au��Q���^�D�S_��7��ɢ��ET�P1
"�vl�|o���~�^�G�K����,��y?�IT��ͫ�rT�A9�Dm?��bl��@}����}��'�˯~_�,�z�7>z4��?���_ȧ��Q��.a�^·�.�����闖��{	��!&;k.�l���<�o��      W      x��}�ncٕ�s�+	��������y�(� ��AIQ$�2��v;+�
�F���Uht?�KؙiGN�@}��G��BA)A�U-�C�L��$���Y{���9"�.w��꯯�����.�����/�^\}r��O/��zq���˫O?xv��˗�_]�������?}���뫟�����ח_>��+���/�'��o./{o�~���/�>�+���ח�'�����s��N���U�����o὾�|���>��<w������gG����?����'���=1>~����O�����'��¸.~��JS)F4"��U�QC�VZ��-(
��y�Rj!���)��v?��p��
����ʓ��O7���{�N=^�z1k�/��q�Wj����ݲ\ѣ��qa+������:��h�v�ja8Vwr�Ӌ������x��aD���3���酏��>"�4S�E.�7�Xc���<����1�ԧ'���}��������Gfx�я��^{���;�B�MO�G�i�� �+�7�;>����ɏ��Y�+�&����.����CW����������Wi8!�/��~������W�.��w_�B��p)���p��//� h����>��*�\�G��3_�O��������-?�����?NpzH)�?��x��2���y{����g�w��#�J����s���k��c���GT� D/��j�(�$2��q�9��˭�f�6���C��|�G,7�m����pq`��l��v�=�n��af_n�;��R���794
��&����N��C.`�рm̑���#��	q'q�����W�#`����Z���X�+��	�$ �2�/���+��|����J!����e�E\}�H��ӻ{�>
�}��>�W��O�������ޒ�{&��X� Y��UBp�iG#t��FDa<'�K��)�����*ջ�(+��4�*L�O�f�X���.5���n��p��ꇤ���,+�%�v�y�\��'��#���2N�#BNk�k���
I��bK����LB��¯?�S\��.�*�o&��i������{ի[|� v��>X ��ߋ��߼In�ߥ��������U�'~	H�:A��W�L�y(�Λ	��(�$����*�V�j�		�X���"Ņ���@�Z#�-@rT*-��A�hRT����lA�v�1�����XkG��ò�l��;�b�찈��~��if�,�mT&9~2\�)�q��IK�k�0����ӡ� �p�������b��  �f���)7\}:O��.�.@v�ۜY^��M�Ό�J~�����E��57�6g> J���Ԯ���
L$��)4�*�`�o3��K��O��:���=pDA1����d�C�����	Y3"ļ�{�5�xMBD)���7v<
gb,��&"����hl�U<?��T��j�p��⤳��\#�P�f[33�v��	V��e����& ҂�hURJ뽌�	�A��J�W���ws�Jh���˿Kh
���}*���>���뤗"d!�}u7��_��E�+R��4�~o�}z#������N����CԾ�H�=�{H�[�fE�oR�h	;�M��Y#�ѥ��D����+�ze�Wa�ý`��q�^[ѫ�J�mֆk'���ʷ��l�vD6W=:<jЖ�r�Y-/�T��aȆ1�}``O���"���	3����>��2� q����{�ތx#�^%��Dt�'/?K> ���)�}�<%�J/�0�S�����C8�r0�\r)���"e,�^!pa����(%�q#%2��]�qB�<T���.�.:��0ъ���q�^�v��٠M�KK�͂�����z�_:���������j��t����]��2zN� ��3O����0�'�����$����>M����R��D��$��l��矧|��ܚ�o��Ӎ8�zNq�����
�$hXZ��R��QSg��{�t��(l�.%
؅sũ	i���w����ޠ�~�h��=,�Ř�v��s3�;��Wkkl��rh�;�T���}��&�;����P'x����,	ȅ��ȁ�T�s��-Z�B@OHz�:2���:u:_%�!�@����b0���u��;)j~����׼�/w3�#�:U�H��A��D%�U�w'-��(��`[��,p9~��;B�b��_n�~�m�NgmV�vHip�B_w�|��ld��):�6D���񇫵)c��j�d�\㼫����ɫ��	,ӄ�}�R�ܧ��	���?I���S�Z``]pNie1���R(�k���M=�R���[�Fg�*��ӽ��^�T??N���#(B��P�(
�H�`0�H�@P�P
� ���/CD`K����u+���d�q|���k���#�B�,wwWb�awx@|uة�<�}O��{����βD@|kM��� ��p?�hƸ�����b9:%��k|��-�xI@�<��'�����-ܼӇw���BI�!T��Q���F(�)P.�Z�8Wo*Υ�	lDNs��Z�&�kͰ�\��uw�+o�r�`��]�;��/�Φ�gC��Z�5�~�1A���mĝ���i����h��J�6����;�n{Uhd�E6�6�4Rmǌ��m�Pd�۝�Nv����a��:�kf^������;� �����T��:I"�"�R �'ѤHo��O͉瑽��q�9Q;���L2+���GL���(�,�	���2�́�o�����dxx�7B�d��FS=.j�R�Ԯl���j�T\묗D�o���6��V��&D4.����h<���3�^+-��$�Ȉ��a"AJs,\t�3Ov8�p]��%���ZU��˟��Ѻ���s3�#H9 �a�Qa1�,�E�|�&�p`�y&�r�uT�q�8hX઀�H����U���{+�O��ȣY����M�3o�Y�n���^����b�N��̊���t}?���(w� �s�!�r�8`�{E��	�Z�6�~��E�׋tSY��?��|��2dҕx�C/���ӭ.�o?�m�n�7�-�=�<_���}����.�M�-)!�����v�SK�1�)��`P!�"�!p	�. DW�"�@�X����YEI��YW�q�������0S�^��O���	n�*;��^���C�W4&�R����i�'�^^� <H��Q�"i�;��`�(A4<a���~x�ۏ�/�-뜿�)���*R{#�+�#�@A�`Ld���SJ�����		HL�Q�2Ą�1En�F�����ˮ�������^�˽�J�����k��V^����fw�'g��r`��,3И���&"&�D�h�B���C������3��5��8�|\�>���I,R���7]��v<o��e����2��S�n0>�j$ՠ����:UJK<�A@q"$R\�\ta�(U.rEq`���R$���RP�ɡ<o����y��@�����t�lw��ߙ���)��>�f::?n��N������m��0YZ�a؄`�s@yR	J��<1��{B[�n��w���n	��ҭ��b�J���~�|2oIB^zu��_$&�Zu�_o��>|����5.�&�~�HV;� ��B`�� �)o�@��(A�=B&b"�+�Qv��<ܛ��[��L�st�E��Ǜ�k�����Q�BN��r�?䲣���j�����9=�^l�Z�eR)�#ƹ�(�A�t�(�dZ�����1�75�4��![�~�i{3��j|i�r��~XWIci� ҏ�
�M)j����En�
;ł1fQ"kupJ2���6��x�l�ʶ&S{Ѫe�/	{4{Н��i��^���!��<_�#{2F��vw\(�ݝ��<h�j1�����C�	���O��(��Bg/	�5����ڬ���n��ù��.mb&���Y�����yߦ���y����L�-~v�����'i#���ϓ+��-��'ynSi,9+)��h���D3{�@�Ј��Qc�U"�
�#A:E�T    ��[m\�����Ť�2��*]s+k�����p]����_���Փ��X�7u8ݚ���;}P��0���y	.R�3˙[i#h�'TK��p7��/���V/R���X�;i�!�t��M����v惤���5�' �#�Rc�9�N���F%�Bc,��VF����<�����t�g򮼏�������@��2Yy�hu�5��n���X=s���)]�nt�NY���;),s]�{�D����j㘓��9�k��frW%��T��]�ߥA��VFK�ȯތ�.�؋ ��ւB$�(��Db�IaN�4��F�\X�ͅqZ:&!gq�#,��7��N�trtZ�nd7r*��72�¢Zv���ii�Ԍ�h�*��q���89��|�g����I�<����9sX()heH� r@� )vOXT�w����'��z����%��j�=��}��G���3�'I���҉W� �DB�">JJ�"b!j=HeB(�фy��tt\���%�A!ۜ������{uL=��X���Ɔ:8�w.T�~�w����>��^���CK��CN%Ħ��D :���	���2ȗ�&�2��w�S̓;R��C��S{�,*'�ԥ,@J *�4��J�}҂R&0���g@�G�e��p�b^��__4�z0���uEֹ_垯cJ������(iRc�q��S���j��5W�ǹ�h��v�'�W	�'Q�KAZ3�1�>a�$��7�����L���1���ۃŉl�5z��B��� q��9��z|.�����#g+86��$�>��v^�Y�,Z$�R�\IB�T��C���:���\};��Q�p/6��Y��AO;ʶe^�L���>-�
�A_ѕJ���d=��l�N��(�2$
�b���@֓��~�z1��,���%�$��Q#sT}v���M0�V5�{!�3X/����$��|��w�,�v�/;ݚ[7-l�z���$����p��*���ֱ���B�?���������ױF@C@X.Z+�ký��$�>@N�es�#P�"".?&�K�rҎ~T+�U��Qm�y�2ݾw����p��f�������q��*��L�n��W2��d��Xq��%� �������p�	��:��A�b�'hZ�]�kɆ)����`������O�%�v�,!��f�Ýa7Â7�����>��&~��#�^��q��^x�9��#V���"Xfi�ZK�F>H���� gR|��N���H{�*[��b���4�Z~/4g[m��;;����aHoН�[�����N���Y�JF{�i���t����i����C,ݥ��b�e2>���/�?�+�!��rL4�w)@o`婢� ��5 @����(Hl`-鼳��V����ދ�X��٬1�)ٛ����{Yf�9�n��1-d�V����i��#.6z�Jo��g�b!��N�y���������� �k��c���^��ވ���v5���������=�[2��$�k������r��]�w<�۝��Yf�(�ZZ�A�pG�)d�0C�������sB�Q g8�ě��b��Av������nm�\s�~��f���I����n�\����97�A!;�����J}\]Z�<�֨�C�6��I�:�'tr��e�;��_盘�C���w7�v���m��-�;��0�� ���ȁ�DL�(ut��7!0�EZ�O6t'dV ���td�K�4�{���y��f������a�N��Mjr��\��W�cs�Uk�l���C(CA�Q�:0
29r�<Q+A%eO��������E�Ho�`�3�>���_���ō�|d�A��d��D��i�$�"�l�: -sŹ��D��
����w��&n�
�^Zή�h��R�?v�_�h{�ȸVw=��Y�5ʬ��͢��~��Ҍ�K��t��SKb�i�U�E������*J�ݭɷTH�5w�C�p�m��ȭF�,GB!��+�!9��Gd"d�4�#u�[`A+�R.ُ�P����/�uk��J\�׎��43������E�3�������Yo�P�ֲ���q����Y�O�����zX]=�V��y��Wm�|y��d�'C��(��D� #��A#����w�_~s��{��^��z�ޠ.��Aۗ��,9� ��!1P��*dP�^E<�O����	�_�YYX0c���hEF�R>�۾��{|���7�����R������x_��|i5���dk�Ϻ�����a�e����ur�'�A��
?�W\QH�OF���3P<ߤ+��m�����>����W׬z;��o�#�6��kZ����������}�y��L�.�@"��8�̽�^x�>ҹ����T䯷+�lؿ����t��p�����́��ay�h$� ����[�Z�!U�@!I��4o<��!�Nq��K����� W���׏������`�tbU�ZMW{O�ae���V��ĉA��`��l���: m]2󆍕�s�}	)���6��O��]�]��t��w �6?ra>�qI��P�H��<rH�im�$Q1�)�Q)L�R� T:�c�4
� ��yi��^ܝ���Z�Ui��ʖ6��$�G6��Qeb�ۍ|/p�hT�Y�xR�[�x<��V�kG���y>,k�c���E�, ����X��� Q���G;}��]_$3f���z�*}�W�1y~�˫O~��H�zq�����C��?�;w��tW�����A���(�էW?���E�+��o���o��)&p��C���~���R��3~r�q�� SGA���8x�:GS`�U!�ݬ��wԌ�e��1:���5~Vn��Ϝ����<.��p��ə��Y9v;zK��v;��k��7�v�"�9�یAs%9XQe��
I�k���|>I`�L���A��y��Mo�"�%�挑��e�����ˊx���o�	Bp�x>"��U���A��"V��k�������jK�Q��k�8�'��n����zw��r�V�������WGv/��?W衞	��K)�zDU�g;&0�Ta���>**O�HH��˴�n^����/ii�:k|�X�����"��k�W��l��N|q����C���*�U�ab�U�,�`B��_�.г����Q&�,�I�y�`W��Q�x^<Q�6-A����>�G�[��7Z��u��ȄҦ9�϶zՀf�-�r�]�X�`ןf�_]��.�a�L��ynN:apLk��V�mB o��1���Nǅ^��-?�`ё�;��@
������	e9�ȂY����� �+������`X����[��B}W���ٍ����6���@�wv��H�NwK�r�]ɠ��s�few<��<���u�G+�ٲ@�d�ǃF�:�e=6&b�T�>�Dd(i�&M��\=_կ�!���[�.����/��H&���3�(y�sb�C�`q���6C�N�����;�����D�R���M���EO�mѩ�Ӫ6��b8�V�vx/KG,?�ox����ԟ������riR��٘_��zf��U��b�1%��=`���r���Jr�8ZP{���(�*uc�֥y�|~���Lz��'ɜ�o�>z'xח�Ƈ�� �*��"�ј���!�d��Ұ�8@dC@�����#���茖n�����������.��7W����ad�q�t#�]��n�����&�ũ�[�*�q����J��j��9Z��(ɘ�	��R�-Ğp����%�d�d�uڍ�>���y�wޏ��ճ��u���4K�~�!�>ٿ~c���Ct�
 ���Z
�� �8�4�D�Q��	X/�prR���&gs�a5��AAt<��uw�]`v���캾/�~�̮�ײ��>�F��F���t�/������F��v.v��e���('�Mc�L������F�F��Ӵ��śà��4)�L�}:����)�/|�Ȩ?���t�� ��^AU:��E�� ��s��Jz(XP,�0/I�Nh�6g��:��bw�FV�۵Ψ���Z��n���a�7��I�9�vǺ"�� �  ��y-7(����ԟ�Oz[�����#H�&Gc�<�$��d��'��g�4�����i���o��^�:��Ώ�y�͉��iN؏��C�\8����1�b�Ũ��
sF[�c{%Âer��;xpBt>�xR>V����y[�b*�FM:����qq��z���XnV����5?.n�Rp�4�6����ю��i2[�9gDD	����v���8��/?����d��C�>��f>���4��r~}3��UR/}	O�`d5�s5�qR����\�#�
%N��������P% �����IZ�dpƂ�H���w�����E)��9�G�.���8��lL.N�y�|c��
�Jgo���2D�r-�lo���/�g�e���J yȵ�*ǌs2 ������B��K�~I'��kp5���y��3�e2����ҳs|s��i�L-�7��{4�c�"�$P���d�d���|��� �!�:�M.��M�" 8E�l���9�}�r��Y���N���E|/�k�-5�Ӄ�In���J���J��3tƽ�o����ҭ�!ÃI(,�� ۠#��8w">�	&���@}�x�<�w����H�ys|������?�:��%���1h)��FMI����ԑJ���
n)g9@
$�洱��z�"?ht�ە	���ʽ���rr�6[���P���Q���z��n��l��j�6eik{c��T�c��M�z��3
���C/n�M�&s!��?*(P�,ho�8M����^I�J�>G�<�|�e���:)��Ȝ$��y,�b8n쟘��9=獋�Fo���V֞Vw��ϳg�ns�����\1���`��t}4)��nر����V.�J��[8{\^��oK�-��*���Mh�	G��;+q+"ڙ�		�
 ��hl��r� ҔqIN�p�h�����	ZUOJ�;��Ў�-�m�|	�g}D��j�ྈ�z[�X9ժ�>wP�Uc�Wb�qvv������Z�3[���=ܼ�����QøY𔖘��#:�����o���c,&�+dL�G��Q$g�������XP���T[ɥEFK����q-e;�l�p��j�:�y�Iζ�G��q���j���s�>Ȭ]����tw�W��V�G�S���I�h���4SJ2��X� �����"N�ߜt~�
y��q�k�����(��
)���'C&�P��P���I��D\�����N��ث��\����R�4����3�l��Vb�v�]��{FMG:?�4��}|>bK'�e�l�ɮ`TƩE�ns
�Rq��]]Noq�g�88e?H��Y�0H�d����@@8Jt4�
�E����E�'
��:�`c�{���S�!뻝������Ag����bm��?j5[ݭre��\��3y0�n�w&ˇf��X<�2X>e��!=D"�'4����g�'p�ଅG��rƹ��im#M�\|�޹�	u�)��a(`H @�@��(9�T�0/�L˳ro�*Q�W�9��ܛA.F�J�4nk��U���v����z���Nַ{�B�D*�g�7,C�K�R<9My�S?�<������ƺ.����_~�Ի�~�N��( /���̂+�Q�  �	N���S�II`]����k�5�������Ū67�4k�{��t����ʻ�x�F���|gSm�Ó�ۜ2r�Sli_ KwC�dLQ��*��RȐ"x���?��_��G?��� e�      `   M   x�3估�¾/��paÅ��(\�d���\F�&)\���bӅ\Ɯ�\�w���paӅ�@�{�b���� 4)�      ^   A   x�M͹�0�����b��<b�ɝ !<ҼL��tb]z�Q�9�qS�<�Omj��,*�      S      x������ � �      P      x������ � �     
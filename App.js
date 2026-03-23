import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';

// --- CONFIGURAÇÃO DAS CORES DO SEU LAYOUT ---
const COLORS = {
  mainBg: '#1e40af',    // Azul escuro do cabeçalho
  cardBg: 'white',      // Fundo branco do corpo
  catPhone: '#f97316',  // Laranja
  catPaw: '#a78bfa',    // Roxo
  catBuilding: '#10b981', // Verde
  listImg: '#bfdbfe',   // Azul claro dos itens 1, 2, 3
  progBg: '#64748b',    // Cinza da barra de progresso (fundo)
  yellow: '#facc15',    // Amarelo
  orange: '#f97316',    // Laranja (barra de progresso)
  blue: '#3b82f6'       // Azul
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* Configura a barra de status do celular (hora, bateria) */}
      <StatusBar barStyle="light-content" backgroundColor={COLORS.mainBg} />

      {/* --- CABEÇALHO AZUL --- */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          
          {/* 1. Imagem de Perfil (Círculo) */}
          <View style={styles.profileCircle}>
            {/* // -> COLOQUE SUA IMAGEM DE PERFIL AQUI
            {/* Exemplo: <Image source={require('./assets/perfil.png')} style={styles.profileImage} /> */}
            {/* Usando um texto provisório enquanto você não coloca imagem */}
            <Text style={{color: '#ccc'}}>Perfil</Text>
          </View>

          {/* 2. Ícone de Notificação com o Círculo Vermelho '3' */}
          <View style={styles.notificationWrapper}>
            {/* // -> COLOQUE SEU ÍCONE DE SININHO AQUI (Pode ser um .png ou biblioteca de ícones) */}
            <Text style={styles.bellIconProvisorio}>🔔</Text> 
            
            {/* O círculo vermelho '3' */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
        </View>

        {/* 3. Texto Lorem Ipsum do Cabeçalho */}
        <Text style={styles.headerText}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        </Text>
      </View>

      {/* --- CORPO ARREDONDADO BRANCO --- */}
      <View style={styles.body}>
        {/* Use ScrollView para permitir rolagem se o conteúdo for grande */}
        <ScrollView showsVerticalScrollIndicator={false}>
          
          {/* Seção 'Categories' */}
          <Text style={styles.sectionTitle}>Categories</Text>
          
          <View style={styles.categoriesRow}>
            {/* Categoria 1: Celular (Laranja) */}
            <TouchableOpacity style={[styles.categoryCard, { backgroundColor: COLORS.catPhone }]}>
              {/* // -> COLOQUE SUA IMAGEM DE CELULAR AQUI
              {/* <Image source={require('./assets/celular.png')} style={styles.categoryIcon} /> */}
              <Text style={styles.iconProvisorio}>📱</Text>
            </TouchableOpacity>

            {/* Categoria 2: Patinha (Roxo) */}
            <TouchableOpacity style={[styles.categoryCard, { backgroundColor: COLORS.catPaw }]}>
              {/* // -> COLOQUE SUA IMAGEM DE PATINHA AQUI */}
              <Text style={styles.iconProvisorio}>🐾</Text>
            </TouchableOpacity>

            {/* Categoria 3: Prédio (Verde) */}
            <TouchableOpacity style={[styles.categoryCard, { backgroundColor: COLORS.catBuilding }]}>
              {/* // -> COLOQUE SUA IMAGEM DE PRÉDIO AQUI */}
              <Text style={styles.iconProvisorio}>🏢</Text>
            </TouchableOpacity>
          </View>

          {/* Seção 'Technology' */}
          <Text style={styles.sectionTitle}>Technology</Text>

          {/* LISTA DE ITENS (1, 2, 3) */}
          
          {/* ITEM 1 */}
          <View style={styles.listItem}>
            <View style={styles.listItemTop}>
              {/* Imagem do Item (1) */}
              <View style={[styles.listItemImagePlaceholder, { backgroundColor: COLORS.listImg }]}>
                {/* // -> COLOQUE SUA IMAGEM DO ITEM 1 AQUI */}
                <Text style={styles.listTextProvisorio}>1</Text>
              </View>
              {/* Texto do Item */}
              <Text style={styles.listItemText}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
              </Text>
            </View>
            {/* Barra de Progresso 1: Amarelo -> Azul */}
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { backgroundColor: COLORS.yellow, width: '70%' }]} />
              <View style={[styles.progressBarFill, { backgroundColor: COLORS.blue, width: '30%' }]} />
            </View>
          </View>

          {/* ITEM 2 */}
          <View style={styles.listItem}>
            <View style={styles.listItemTop}>
              <View style={[styles.listItemImagePlaceholder, { backgroundColor: COLORS.listImg }]}>
                {/* // -> COLOQUE SUA IMAGEM DO ITEM 2 AQUI */}
                <Text style={styles.listTextProvisorio}>2</Text>
              </View>
              <Text style={styles.listItemText}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
              </Text>
            </View>
            {/* Barra de Progresso 2: Laranja -> Azul */}
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { backgroundColor: COLORS.orange, width: '40%' }]} />
              <View style={[styles.progressBarFill, { backgroundColor: COLORS.blue, width: '60%' }]} />
            </View>
          </View>

          {/* ITEM 3 */}
          <View style={styles.listItem}>
            <View style={styles.listItemTop}>
              <View style={[styles.listItemImagePlaceholder, { backgroundColor: COLORS.listImg }]}>
                {/* // -> COLOQUE SUA IMAGEM DO ITEM 3 AQUI */}
                <Text style={styles.listTextProvisorio}>3</Text>
              </View>
              <Text style={styles.listItemText}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
              </Text>
            </View>
            {/* Neste item a barra de progresso não aparece na sua imagem, mantive sem ela. */}
          </View>

          {/* Espaço extra no final para não cortar o último item */}
          <View style={{ height: 30 }} />

        </ScrollView>
      </View>
    </View>
  );
}

// --- ESTILIZAÇÃO (O CSS-in-JS do React Native) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBg, // Cor principal que preenche tudo
  },
  // Cabeçalho (Azul)
  header: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
    height: 220, // Altura definida para o cabeçalho
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  // Perfil
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)', // Círculo translúcido provisório
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Corta a imagem em círculo
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  // Notificação e Badge '3'
  notificationWrapper: {
    position: 'relative',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIconProvisorio: {
    fontSize: 24,
    color: 'white',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 15,
    lineHeight: 22,
  },

  // Corpo (Branco e Arredondado)
  body: {
    flex: 1,
    backgroundColor: COLORS.cardBg,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 30,
    marginTop: -40, // Faz o corpo subir um pouco e 'encaixar' no cabeçalho
    zIndex: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 15,
    marginTop: 10,
  },
  // Categorias
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  categoryCard: {
    width: '30%', // Três cards na linha
    height: 100, // Ajuste conforme necessário
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain', // Ajusta a imagem sem distorcer
  },
  iconProvisorio: {
    fontSize: 35,
    color: 'white',
  },
  // Lista de Itens (1, 2, 3)
  listItem: {
    marginBottom: 15,
  },
  listItemTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  listItemImagePlaceholder: {
    width: 130, // Largura conforme sua imagem
    height: 90, // Altura conforme sua imagem
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  listTextProvisorio: {
    fontSize: 26,
    color: '#333',
  },
  listItemText: {
    flex: 1, // Preenche o espaço restante
    color: '#6b7280',
    fontSize: 14,
    lineHeight: 20,
  },
  // Barra de Progresso
  progressBarBg: {
    height: 12,
    backgroundColor: COLORS.progBg, // Fundo cinza da barra
    borderRadius: 6,
    flexDirection: 'row', // Permite alinhar amarelo e azul lado a lado
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
  },
});
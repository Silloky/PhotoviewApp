/* import * as React from 'react'; */
import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
  const webViewRef = useRef(null);

  useEffect(() => {
    const backAction = () => {
      webViewRef.current.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='light' translucent={false} />
      <WebView
        source={{ uri: 'https://albums.grigwood.ml' }}
        ref={webViewRef}
        style={styles.view}
        originWhitelist={['*']}
        allowsInlineMediaPlayback
        javaScriptEnabled
        scalesPageToFit
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabledAndroid
        useWebkit
        startInLoadingState={true}
        injectedJavaScript="// document.getElementsByClassName('h-12 lg:h-10')[0].src = 'https://ronde-de-l-espoir.fr/img/clean_logo_littoral.png'"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

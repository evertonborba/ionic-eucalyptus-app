import { Component } from '@angular/core'
import { IonicPage, ModalController, NavController } from 'ionic-angular'
import {
  InAppBrowser,
  InAppBrowserOptions,
} from '@ionic-native/in-app-browser/ngx'

import { Item } from '../../models/item'
import { Items } from '../../providers'

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html',
})
export class ListMasterPage {
  currentItems: Item[]

  options: InAppBrowserOptions = {
    location: 'yes', //Or 'no'
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes', //Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only
    toolbar: 'yes', //iOS only
    enableViewportScale: 'no', //iOS only
    allowInlineMediaPlayback: 'no', //iOS only
    presentationstyle: 'pagesheet', //iOS only
    fullscreen: 'yes', //Windows only
  }

  constructor(
    public navCtrl: NavController,
    public items: Items,
    public modalCtrl: ModalController,
    private theInAppBrowser: InAppBrowser,
  ) {
    this.currentItems = this.items.query()
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {}

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item,
    })
  }

  public openWithSystemBrowser(item: Item) {
    let target = '_system'
    let url = item.creativeCommons
    this.theInAppBrowser.create(url, target, this.options)
  }
  public openWithInAppBrowser(item: Item) {
    let target = '_blank'
    let url = item.creativeCommons
    this.theInAppBrowser.create(url, target, this.options)
  }
  public openWithCordovaBrowser(item: Item) {
    let target = '_self'
    let url = item.creativeCommons
    this.theInAppBrowser.create(url, target, this.options)
  }
}

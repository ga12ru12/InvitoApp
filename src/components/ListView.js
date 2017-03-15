import React from 'react';
import {
  ListView,
  Dimensions,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

const LIST_VIEW_PAGE_SIZE = Platform.OS === 'android' ? 20 : 1;

export default class CustomListView extends React.Component {

  static defaultProps = {
    data: [],
    contentInset: { top: 0, bottom: 0 },
    minContentHeight: Dimensions.get('window').height + 20,
    renderSeparator: (sectionID, rowID) => <View style={styles.separator} key={rowID} />,
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      getRowData: (dataBlob, sid, rid) => dataBlob[sid][rid],
      getSectionHeaderData: (dataBlob, sid) => dataBlob[sid],
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      contentHeight: 0,
      dataSource: cloneWithData(dataSource, props.data),
    };

    this.renderFooter = this.renderFooter.bind(this);
    this.onContentSizeChange = this.onContentSizeChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        dataSource: cloneWithData(this.state.dataSource, nextProps.data),
      });
    }
  }

  onContentSizeChange(contentWidth, contentHeight) {
    if (contentHeight !== this.state.contentHeight) {
      this.setState({ contentHeight });
    }
  }

  getScrollResponder() {
    return this.listview.getScrollResponder();
  }

  scrollTo(...args) {
    this.listview.scrollTo(...args);
  }

  renderFooter() {
    if (this.state.dataSource.getRowCount() === 0) {
      return this.props.renderEmptyList && this.props.renderEmptyList();
    }
    return this.props.renderFooter && this.props.renderFooter();
  }

  render() {
    const { contentInset } = this.props;
    const bottom = contentInset.bottom +
      Math.max(0, this.props.minContentHeight - this.state.contentHeight);
    return (
      <ListView
        initialListSize={10}
        pageSize={LIST_VIEW_PAGE_SIZE}
        {...this.props}
        ref={ref => this.listview = ref}
        dataSource={this.state.dataSource}
        renderFooter={this.renderFooter}
        contentInset={{ bottom, top: contentInset.top }}
        onContentSizeChange={this.onContentSizeChange}
      />
    );
  }
}

function cloneWithData(dataSource, data) {
  if (!data) {
    return dataSource.cloneWithRows([]);
  }
  if (Array.isArray(data)) {
    return dataSource.cloneWithRows(data);
  }
  if ((typeof data === 'object') && (data !== null)) {
    return dataSource.cloneWithRows(data);
  }
  return dataSource.cloneWithRowsAndSections(data);
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#eeeeee',
    height: 1,
  },
});
